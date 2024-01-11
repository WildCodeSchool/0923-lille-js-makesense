const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `START TRANSACTION;
      INSERT INTO user (lastname, firstname, email, location, picture) VALUES (?,?,?,?,?);
      INSERT INTO authentication (hashed_password, auth_date_time, user_id) VALUES (?, NOW(), LAST_INSERT_ID());
      COMMIT;`,
      [
        user.lastname,
        user.firstname,
        user.email,
        user.location,
        user.picture,
        user.hashedPassword,
      ]
    );
    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readByRole(id) {
    // Execute the SQL SELECT query to retrieve a specific user's role as admin of not
    const [rows] = await this.database.query(
      `SELECT admin_id FROM admin WHERE user_id = ?`,
      [id]
    );
    // is result is null, the user isn't in the admin table
    return rows[0] ? "is_admin" : "is_user";
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve the user by their email
    const [rows] = await this.database.query(
      `SELECT user.*, authentication.hashed_password from ${this.table} 
      JOIN authentication ON user.user_id = authentication.user_id
      WHERE email = ?`,
      [email]
    );

    // Return the user as first row of the result
    return rows[0];
  }

  // The U of CRUD - Update operation
  async updatePicture(id, user) {
    // Execute the SQL SELECT query to update the picture of a specific user by its ID;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} 
      SET picture = ?
      WHERE user_id = ?`,
      [user.picture, id]
    );
    return rows.affectedRows;
  }

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;
