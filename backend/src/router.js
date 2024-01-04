const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");
const decisionControllers = require("./controllers/decisionControllers");

// USER ROUTES
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
// Route to get all decisions
router.get("/allDecisions", decisionControllers.browse);
// Route to get all decisions waiting for an answer
router.get("");

/* ************************************************************************* */

module.exports = router;
