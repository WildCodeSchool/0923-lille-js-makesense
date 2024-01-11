const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "decision" as configuration
    super({ table: "decision" });
  }

  // The C of CRUD - Create operation

  async create(decision) {
    // Execute the SQL INSERT query to add a new decision to the "decision" table
    const [result] = await this.database.query(
      `
      BEGIN;
      INSERT INTO ${this.table} (decision_date, status, decision_title, user_id) 
      VALUES (?,"décision crée",?,?);
      SET @last_decision_id = LAST_INSERT_ID();
      INSERT INTO paragraph (paragraph_title, paragraph_content, decision_id) 
      VALUES (?, ?, @last_decision_id);
      INSERT INTO assignment (date,role, decision_id, user_id) 
      VALUES (?,?, @last_decision_id,?);
      COMMIT;`,
      [decision.title]
    );

    // Return the ID of the newly inserted decision
    return result.insertId;
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

  async update(id, decision) {
    const [rows] = await this.database.query(
      `BEGIN;

      SELECT * FROM decision
      WHERE decision_id = ?;

      UPDATE paragraph
      SET paragraph_title = ?,
      paragraph_content = ?
      WHERE paragraph.decision_id = ? AND paragraph_id = ? ;

      UPDATE assignment
      SET role = ?
      WHERE assignment.user_id = ? AND assignment.decision_id = ?;
    
      COMMIT;`,
      [id, decision]
    );
    return rows[0];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an decision by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = DecisionManager;
