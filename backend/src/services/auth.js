const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2d,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallilism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await argon2.hash(
      req.body.hashed_password,
      hashingOptions
    );
    req.body.hashedPassword = hashedPassword;
    delete req.body.hashed_password;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPassword,
};
