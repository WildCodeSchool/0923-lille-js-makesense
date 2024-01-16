const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

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

const verifyToken = (req, res, next) => {
  try {
    // Vérifier la présence de l'en-tête "Authorization" dans la requête
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    // Vérifier que l'en-tête a la forme "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Vérifier la validité du token (son authenticité et sa date d'expériation)
    // En cas de succès, le payload est extrait et décodé
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyToken,
};
