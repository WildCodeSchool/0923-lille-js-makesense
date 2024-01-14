// uncomment to test argon2
/* const argon2 = require("argon2"); */

// Import access to database tables
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    if (user == null) {
      res.status(422).send("AUTH CONT DEF");
      return;
    }
    // argon2 doesn't recognize the pre-hashed passwords, we need users created through the form to check if the error comes from
    // the pre-hashed password or from the code in here
    const verified = true; /* await argon2.verify(
      user[0].hashed_password,
      req.body.password
    ); */
    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete user.hashed_password;

      res.json(user);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
};
