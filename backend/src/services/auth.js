const argon2 = require("argon2");

// Options to hash passwords with argon2
const hashingOptions = {
  type: argon2.argon2d,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallilism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    // Hashing password with the hash method (element you want hased, options)
    const hashedPassword = await argon2.hash(req.body.password, hashingOptions);
    // Replacing non hashed password with hashed password
    req.body.hashedPassword = hashedPassword;
    // Deleting non hashed version of the password
    delete req.body.password;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPassword,
};
