const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// USER ROUTES
// Import Controller
const userControllers = require("./controllers/userControllers");
// Route to get a list of users
router.get("/user", userControllers.browse);
// Route to get a specific user by ID
router.get("/user/:id", userControllers.read);
// Route to get a user's role by their ID
router.get("/userRole/:id", userControllers.readByRole);
// Route to add a new user
router.post("/user", userControllers.add);
// Route to update a user's picture
router.put("/userPicture/:id", userControllers.updatePicture);

// DECISION ROUTES
// Import Controller
const decisionControllers = require("./controllers/decisionControllers");
// Route to get all decisions
router.get("/allDecisions", decisionControllers.browse);
// Route to get all pending decisions
router.get("/allPendingDecisions", decisionControllers.browsePending);
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
router.get("");
// Route to create decision
router.get("/createDecision", decisionControllers.createDecision);
// Route to update decision
router.get("/updateDecision/:id", decisionControllers.updateDecision);
// Route to retrieve a complete posted decision by ID
router.get("/decision/:id", decisionControllers.read);

// COMMENT ROUTES
// Import Controller
const commentControllers = require("./controllers/commentControllers");
// Route to retrieve a complete posted comment by ID
router.get("/comment", commentControllers.read);
// Route to retrieve all comments from the "comment" table with its author and role
router.get("/allComments", commentControllers.browse);
// Route to access comments belonging to a posted decision
router.get("/commentsByDecision/:id", commentControllers.readByDecision);
// Route to add a new comment
router.post("/comment", commentControllers.add);
/* ************************************************************************* */

module.exports = router;
