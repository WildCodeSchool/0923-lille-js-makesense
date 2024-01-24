const argon2 = require("argon2");

// Import access to database tables
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    // verify with argon2
    const verified = await argon2.verify(
      user[0].hashed_password,
      req.body.password
    );
    if (verified) {
      // Respond with the user in JSON format without the hashed password
      delete user.hashed_password;

      res.json(user);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
