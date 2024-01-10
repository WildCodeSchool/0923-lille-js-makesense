const argon2 = require("argon2");

// acces database tables
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    // get a user from the database based on the email provided
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified) {
      // user without the hashed password
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
