const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "decision" as configuration
    super({ table: "decision" });
  }

  // The C of CRUD - Create operation
  async create(decision) {
    // Execute the SQL INSERT queries to add a new decision, new paragraphs, and assignments
    try {
      const [resultDecision] = await this.database.query(
        `INSERT INTO ${this.table} (decision_date, decision_delay, status, decision_title, user_id) 
          VALUES (DATE_FORMAT(NOW(), "%Y-%m-%d"),?, ?,?,?);`,
        [
          decision.decision_delay,
          decision.status,
          decision.decision_title,
          decision.user_id,
        ]
      );
      // Taking the id from the first insert to update the other tables
      const decisionId = resultDecision.insertId;

      await this.database.query(
        `INSERT INTO paragraph (paragraph_details, paragraph_impact, paragraph_benefits, paragraph_risks, paragraph_first_decision, paragraph_finale_decision, decision_id) 
          VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [
          decision.paragraph_details,
          decision.paragraph_impact,
          decision.paragraph_benefits,
          decision.paragraph_risks,
          decision.paragraph_first_decision,
          decision.paragraph_finale_decision,
          decisionId,
        ]
      );
      // Loop for experts users
      for (let i = 0; i < decision.experts.length; i += 1) {
        this.database.query(
          `INSERT INTO assignment (date, role, decision_id, user_id) VALUES (DATE_FORMAT(NOW(), "%Y-%m-%d"), "Expert", ?, ?);`,
          [decisionId, decision.experts[i].user_id]
        );
      }
      // Loop for impacted users
      for (let i = 0; i < decision.impacted.length; i += 1) {
        this.database.query(
          `INSERT INTO assignment (date, role, decision_id, user_id) VALUES (DATE_FORMAT(NOW(), "%Y-%m-%d"), "Impacté", ?, ?);`,
          [decisionId, decision.impacted[i].user_id]
        );
      }
      return resultDecision.insertId;
    } catch (error) {
      return error;
    }
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific decision by its ID
    const [rows] = await this.database.query(
      `SELECT decision.*, 
      user.firstname, user.lastname, user.location, user.picture,
      paragraph.*,
      COUNT(comment.comment_id) AS nb_comments
      FROM ${this.table}
      JOIN user ON decision.user_id = user.user_id
      LEFT JOIN paragraph ON decision.decision_id = paragraph.decision_id
      LEFT JOIN comment ON decision.decision_id = comment.decision_id
      WHERE decision.decision_id = ?
      GROUP BY decision.decision_id, paragraph.paragraph_id, user.user_id;`,
      [id]
    );
    // Return the first row of the result, which represents the decision
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all decisions from the decision table
    const [rows] = await this.database
      .query(`SELECT decision.*, paragraph.*, user.*, COUNT(comment.comment_id) AS nb_comments
      FROM ${this.table}
      JOIN user ON decision.user_id = user.user_id
      LEFT JOIN paragraph ON decision.decision_id = paragraph.decision_id
      LEFT JOIN comment ON decision.decision_id = comment.decision_id
      GROUP BY decision.decision_id, paragraph.paragraph_id, user.user_id;`);

    // Return the array of decisions
    return rows;
  }

  async readAllPending() {
    // Execute the SQL SELECT query to retrieve all pending decisions from the decision table
    const [rows] = await this.database.query(
      `SELECT decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location, COUNT(comment.comment_id) AS nb_comments
      FROM ${this.table}
      JOIN user ON decision.user_id = user.user_id
      LEFT JOIN comment ON decision.decision_id = comment.decision_id
      WHERE decision.status = "Décision commencée" OR decision.status = "Première décision prise" OR decision.status = "Conflit sur la décision"
      GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;`
    );

    // Return the array of decisions
    return rows;
  }

  async getDecisionsCompleted() {
    const [rows] = await this.database.query(
      `SELECT decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location, COUNT(comment.comment_id) AS nb_comments
      FROM decision
      JOIN user ON decision.user_id = user.user_id
      LEFT JOIN comment ON decision.decision_id = comment.decision_id
      WHERE decision.status = "Décision terminée" OR decision.status = "Décision non aboutie"
      GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;`
    );

    // Retournez le résultat
    return rows;
  }

  async getCurrentDecisions(userId) {
    const [rows] = await this.database.query(
      `SELECT decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location, COUNT(comment.comment_id) AS nb_comments
      FROM decision
      JOIN user ON decision.user_id = user.user_id
      LEFT JOIN comment ON decision.decision_id = comment.decision_id
      WHERE decision.status = "Décision commencée" OR decision.status = "Première décision prise" OR decision.status = "Conflit sur la décision" OR decision.status = "Décision non aboutie" OR decision.status = "Décision définitive"
      GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;
`,
      [userId, userId, userId]
    );

    // Retournez le résultat
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

  // Implement logic to retrieve experts for a given decision
  async getExperts(decisionId) {
    const [rows] = await this.database.query(
      `SELECT user.user_id, user.firstname, user.lastname, user.picture, user.location, assignment.role
     FROM assignment
     JOIN user ON assignment.user_id = user.user_id
     WHERE assignment.decision_id = ? AND assignment.role = "Expert"`,
      [decisionId]
    );

    return rows;
  }

  // Implement logic to retrieve Impacted for a given decision

  async getImpacted(decisionId) {
    const [rows] = await this.database.query(
      `SELECT user.user_id, user.firstname, user.lastname, user.picture, user.location, assignment.role
     FROM assignment
     JOIN user ON assignment.user_id = user.user_id
     WHERE assignment.decision_id = ? AND assignment.role = "Impacté"`,
      [decisionId]
    );

    return rows;
  }

  // Implémentez la logique pour récupérer les décisions liées à un utilisateur
  async getRelatedDecisions(userId) {
    const [rows] = await this.database.query(
      `SELECT
      decision.decision_id,
      decision.decision_title,
      decision.status,
      user.firstname AS author_firstname,
      user.lastname AS author_lastname,
      user.picture AS author_picture,
      user.location,
      COUNT(comment.comment_id) AS nb_comments
    FROM ${this.table}
    JOIN user ON decision.user_id = user.user_id
    LEFT JOIN assignment ON decision.decision_id = assignment.decision_id
    LEFT JOIN comment ON decision.decision_id = comment.decision_id
    WHERE user.user_id = ?
       OR assignment.user_id = ?
       OR comment.user_id = ? 
    GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location`,
      [userId, userId, userId]
    );

    // Retournez le résultat
    return rows;
  }

  async update(decision) {
    const [updateParagraph] = await this.database.query(
      `
    UPDATE paragraph
    SET
    paragraph_details = ?,
    paragraph_impact= ?,
    paragraph_benefits = ?,
    paragraph_risks = ?,
    paragraph_first_decision = ?,
    paragraph_finale_decision = ?
    WHERE decision_id = ?
    `,
      [
        decision[0].paragraph_details,
        decision[0].paragraph_impact,
        decision[0].paragraph_benefits,
        decision[0].paragraph_risks,
        decision[0].paragraph_first_decision,
        decision[0].paragraph_finale_decision,
        decision[0].decision_id,
      ]
    );

    const [updateDecision] = await this.database.query(
      `
    UPDATE decision
    SET status = ?,
    decision_delay= ?,
    decision_title = ?
    WHERE decision_id = ?
   
    `,
      [
        decision[1].status,
        decision[1].decision_delay,
        decision[1].decision_title,
        decision[1].decision_id,
      ]
    );

    return { updateParagraph, updateDecision };
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an decision by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = DecisionManager;
