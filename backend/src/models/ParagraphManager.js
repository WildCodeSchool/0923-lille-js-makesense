const AbstractManager = require("./AbstractManager");

class paragraphManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "paragraph" as configuration
    super({ table: "paragraph" });
  }

  // The C of CRUD - Create operation

  async create(paragraph) {
    // Execute the SQL INSERT query to add a new paragraph to the "paragraph" table
    const [result] = await this.database.query(
      `START TRANSACTION;
      INSERT INTO paragraph (lastname, firstname, email, location, picture) VALUES (?,?,?,?,?);
      INSERT INTO authentication (hashed_password, auth_date_time, paragraph_id) VALUES (?, NOW(), LAST_INSERT_ID());
      COMMIT;`,
      [
        paragraph.lastname,
        paragraph.firstname,
        paragraph.email,
        paragraph.location,
        paragraph.picture,
        paragraph.hashedPassword,
      ]
    );
    // Return the ID of the newly inserted paragraph
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific paragraph by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE decision_id = ?`,
      [id]
    );
    // Return the first row of the result, which represents the paragraph
    return rows;
  }

  async readByRole(id) {
    // Execute the SQL SELECT query to retrieve a specific paragraph's role as admin of not
    const [rows] = await this.database.query(
      `SELECT admin_id FROM admin WHERE paragraph_id = ?`,
      [id]
    );
    // is result is null, the paragraph isn't in the admin table
    return rows[0] ? "is_admin" : "is_paragraph";
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve the paragraph by their email
    const [rows] = await this.database.query(
      `SELECT paragraph.*, authentication.hashed_password from ${this.table} 
      JOIN authentication ON paragraph.paragraph_id = authentication.paragraph_id
      WHERE email = ?`,
      [email]
    );

    // Return the paragraph as first row of the result
    return rows;
  }

  // The U of CRUD - Update operation
  async updatePicture(id, paragraph) {
    // Execute the SQL SELECT query to update the picture of a specific paragraph by its ID;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} 
      SET picture = ?
      WHERE paragraph_id = ?`,
      [paragraph.picture, id]
    );
    return rows.affectedRows;
  }

  // async update(paragraph) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an paragraph by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = paragraphManager;
