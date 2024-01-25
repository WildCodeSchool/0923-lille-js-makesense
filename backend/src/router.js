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
router.get("/decisions/all", decisionControllers.browse);
// Route to get one decision
router.get("/decisions/:id", decisionControllers.read);
// Route to get all pending decisions
router.get("/decisions/pending", decisionControllers.browsePending);
// chercher expert / impacter
router.get(
  "/decisions/:id/experts-impactes",
  decisionControllers.getExpertsAndImpactes
);
// filter decisions linked to a user
router.get(
  "/decisions/:id/related-decisions",
  decisionControllers.getRelatedDecisions
);
// Route to get all decisions waiting for an answer (query ready in queries list)

// COMMENT ROUTES
// Import Controller
const commentControllers = require("./controllers/commentControllers");
// Route to retrieve a complete posted comment by ID
router.get("/comment", commentControllers.read);
// Route to retrieve all comments from the "comment" table with its author and role
router.get("/comment/all", commentControllers.browse);
// Route to access comments belonging to a posted decision
router.get("/decision/:id/comments", commentControllers.readByDecision);
// Route to add a new comment
router.post("/decisions/:id/comment", commentControllers.add);

// PARAGRAPHS ROUTES
// Import Controller
const paragraphsControllers = require("./controllers/paragraphsControllers");
// Route to get all paragraphs for 1 decision
router.get("/decisions/:id/paragraphs", paragraphsControllers.read);
// Route to create decision
router.post("/decision/create", decisionControllers.createDecision);
// Route to update decision
router.post("/decision/update", decisionControllers.updateDecision);
// Route to retrieve a complete posted decision by ID
router.get("/decision/:id", decisionControllers.read);

/* ************************************************************************* */

module.exports = router;
