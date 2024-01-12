const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "decision" as configuration
    super({ table: "decision" });
  }

  // The C of CRUD - Create operation
  async create(decision) {
    // Execute the SQL INSERT queries to add a new decision, paragraph, and assignment
    const [resultDecision] = await this.database.query(
      `INSERT INTO ${this.table} (decision_date, decision_delay, status, decision_title, user_id)     
      VALUES (?,?,?,?,?);`,
      [
        decision[0].decision_date,
        decision[0].decision_delay,
        decision[0].status,
        decision[0].decision_title,
        decision[0].user_id,
      ]
    );
    const [resultParagraph] = await this.database.query(
      `INSERT INTO paragraph (paragraph_title, paragraph_content, decision_id) 
        VALUES (?, ?, ?);`,
      [
        decision[1].paragraph_title,
        decision[1].paragraph_content,
        resultDecision.insertId,
      ]
    );

    const [resultAssignment] = await this.database.query(
      `INSERT INTO assignment (date, role, decision_id, user_id) 
        VALUES (?,?,?,?);`,
      [
        decision[2].date,
        decision[2].role,
        resultDecision.insertId,
        decision[2].user_id,
      ]
    );

    return {
      resultDecision,
      resultParagraph,
      resultAssignment,
    };
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific decision by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE decision_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the decision
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all decisions from the decision table
    const [rows] = await this.database
      .query(`SELECT decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location, COUNT(comment.comment_id) AS nb_comments
    FROM ${this.table}
    JOIN user ON decision.user_id = user.user_id
    LEFT JOIN comment ON decision.decision_id = comment.decision_id
    GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;`);

    // Return the array of decisions
    return rows;
  }

  async readAllPending() {
    // Execute the SQL SELECT query to retrieve all pending decisions from the decision table
    const [rows] = await this.database
      .query(`SELECT decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location, COUNT(comment.comment_id) AS nb_comments
    FROM ${this.table}
    JOIN user ON decision.user_id = user.user_id
    LEFT JOIN comment ON decision.decision_id = comment.decision_id
    WHERE decision.status = "Prise de décision commencée" OR decision.status = "Première décision prise" OR decision.status = "Conflit sur la décision"
    GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;`);

    // Return the array of decisions
    return rows;
  }

  // The U of CRUD - Update operation
  async updatePicture(id, picture) {
    // Execute the SQL SELECT query to retrieve a specific decision by its ID
    const [rows] = await this.database.query(
      `UPDATE ${this.table} 
      SET picture = ?
      WHERE decision_id = ?;`,
      [picture, id]
    );
    return rows[0];
  }

  async update(paragraph, decision) {
    const [selectDecision] = await this.database.query(
      `
    SELECT * FROM decision
    WHERE decision_id = ? AND user_id = ?;
    `,
      [decision.decision_id, decision.user_id]
    );

    const [updateParagraph] = await this.database.query(
      `
    UPDATE paragraph
    SET paragraph_title = ?,
    paragraph_content = ?
    WHERE decision_id = ? AND paragraph_id = ?;
    `,
      [
        paragraph.paragraph_title,
        paragraph.paragraph_content,
        paragraph.decision_id,
        paragraph.paragraph_id,
      ]
    );

    const [updateDecision] = await this.database.query(
      `
    UPDATE decision
    SET status = ?
    WHERE user_id = ? AND decision_id = ?;
    `,
      [decision.status, decision.user_id, decision.decision_id]
    );

    return { selectDecision, updateParagraph, updateDecision };
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an decision by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = DecisionManager;
