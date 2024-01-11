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
// Route to get all decisions waiting for an answer (query ready in queries list)
router.get("");
// Route to create decision
router.post("/createDecision", decisionControllers.createDecision);
// Route to update decision
router.post("/updateDecision/:id", decisionControllers.updateDecision);

/* ************************************************************************* */

module.exports = router;
