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
      `insert into ${this.table} (title) values (?)`,
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

  async readByRole(id) {
    // Execute the SQL SELECT query to retrieve a specific decision by its ID
    const [rows] = await this.database.query(
      `SELECT role FROM ${this.table} WHERE decision_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all decisions from the "decision" table
    const [rows] = await this.database
      .query(`SELECT decision.decision_id, decision.title, decision.status, user.firstname, user.lastname, user.picture, user.location, COUNT(comment.comment_id) AS nb_comments
    FROM ${this.table}
    JOIN decision_maker ON decision.decision_maker_id = decision_maker.decision_maker_id
    JOIN user ON decision_maker.user_id = user.user_id
    LEFT JOIN comment ON decision.decision_id = comment.decision_id
    WHERE decision.status = 'pending'
    GROUP BY decision.decision_id, decision.title, decision.status, user.firstname, user.lastname, user.picture, user.location;`);

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

  // async update(decision) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an decision by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = DecisionManager;
