const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// hashing password middleware
const { hashPassword } = require("./services/auth");

// LOGIN
const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);

// USER ROUTES
// Import Controller
const userControllers = require("./controllers/userControllers");
// Route to get a list of users
router.get("/user", userControllers.browse);
// Route to get a specific user by ID
router.get("/user/:id", userControllers.read);
// Route to get a user's role by their ID
router.get("/user/role/:id", userControllers.readByRole);
// Route to add a new user
router.post("/user/create", hashPassword, userControllers.add);
// Route to update a user's picture
router.put("/user/picture/:id", userControllers.updatePicture);

// DECISION ROUTES
// Import Controller
const decisionControllers = require("./controllers/decisionControllers");
// Route to get all decisions
router.get("/allDecisions", decisionControllers.browse);
// Route to get all pending decisions
router.get("/allPendingDecisions", decisionControllers.browsePending);
// Route to get all decisions waiting for an answer (query ready in queries list)
router.get("");

/* ************************************************************************* */

module.exports = router;
