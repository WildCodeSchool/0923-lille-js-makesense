const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "comment" as configuration
    super({ table: "comment" });
  }

  // The C of CRUD - Create operation

  async create(comment, userId, decisionId) {
    // Execute the SQL INSERT query to add a new comment to the "comment" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (comment_date_time, comment_content, user_id, decision_id) VALUES (NOW(),?,?,?)`,
      [comment, userId, decisionId]
    );
    // Return the ID of the newly inserted comment
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific comment by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE comment_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // Execute the SQL SELECT query to retrieve a specific comment by the id of the decision to which it is associated
  async readByDecision(id) {
    const [rows] = await this.database.query(
      `SELECT DATE_FORMAT(comment.comment_date_time,'%d %b. %y - %T') AS short_date, user.picture, user.firstname, user.lastname, assignment.role, comment.comment_content
          FROM ${this.table}
          LEFT JOIN assignment ON comment.user_id = assignment.user_id
          INNER JOIN user ON comment.user_id = user.user_id
          INNER JOIN decision ON comment.decision_id = decision.decision_id
          WHERE decision.decision_id = ?
          ORDER BY comment.comment_date_time DESC`,
      [id]
    );
    return rows;
  }

  async readByRole(id) {
    // Execute the SQL SELECT query to retrieve a specific comment's role as "expert", "impacted" or "visitor"
    const [rows] = await this.database.query(
      `SELECT role FROM assignment WHERE user_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all comments from the "comment" table with its author and role
    const [rows] = await this.database
      .query(` SELECT comment.comment_date_time, user.picture, CONCAT(user.firstname,' ', user.lastname) AS name, assignment.role, comment.comment_content
    FROM ${this.table}
    INNER JOIN assignment ON comment.user_id = assignment.user_id
    INNER JOIN user ON comment.user_id = user.user_id
    INNER JOIN decision ON comment.decision_id = decision.decision_id
    ORDER BY comment.comment_date_time DESC`);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  async updateContent(id, comment) {
    // Execute the SQL SELECT query to update the content of a specific comment by its ID;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} 
      SET comment_content = ?
      WHERE comment_id = ?`,
      [comment.comment_content, id]
    );
    return rows.affectedRows;
  }

  // async update(comment) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a comment by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CommentManager;
