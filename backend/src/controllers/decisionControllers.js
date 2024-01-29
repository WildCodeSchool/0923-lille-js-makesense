// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browseLate = async (req, res, next) => {
  try {
    // Fetch all decisions from the database
    const decisions = await tables.decision.readAllLate();

    // Respond with the decisions in JSON format
    res.json(decisions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch all decisions from the database
    const decisions = await tables.decision.readAll();

    // Respond with the decisions in JSON format
    res.json(decisions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific decision from the database based on the provided ID
    const decision = await tables.decision.read(req.params.id);

    // If the decision is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the decision in JSON format
    if (decision == null) {
      res.sendStatus(404);
    } else {
      res.json(decision);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByRole = async (req, res, next) => {
  try {
    // Fetch a specific decision from the database based on the provided ID
    const decision = await tables.decision.readByRole(req.params.id);

    // If the decision is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the decision in JSON format
    if (decision == null) {
      res.sendStatus(404);
    } else {
      res.json(decision);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const updatePicture = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const decision = await tables.decision.updatePicture(id, req.body.picture);
    if (decision == null) {
      res.sendStatus(404);
    } else {
      res.json(decision);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const createDecision = async (req, res, next) => {
  const decision = req.body;
  try {
    // Insert the decision into the database
    const insertId = await tables.decision.create(decision);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const updateDecision = async (req, res, next) => {
  // Extract the decision data from the request body
  const decision = req.body;

  try {
    // Insert the decision into the database
    const insertId = await tables.decision.update(decision);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted decision
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Experts
const getExperts = async (req, res, next) => {
  try {
    const decisionId = req.params.id;

    // Call your decision manager's method to retrieve the experts
    const experts = await tables.decision.getExperts(decisionId);

    // Respond with experts in JSON format
    res.json(experts);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Impacted

const getImpacted = async (req, res, next) => {
  try {
    const decisionId = req.params.id;

    // Call your decision manager's method to retrieve the impacted
    const impacted = await tables.decision.getImpacted(decisionId);

    // Respond with impacted in JSON format
    res.json(impacted);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// filter decisions linked to a user
const getRelatedDecisions = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Call your decision handler method to retrieve user-related decisions
    const relatedDecisions = await tables.decision.getRelatedDecisions(userId);

    // Respond with decisions in JSON format
    res.json(relatedDecisions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// all completed decision for user
const getDecisionsCompleted = async (req, res, next) => {
  try {
    // Fetch all decisionsCompleted from the database
    const decisionsCompleted = await tables.decision.getDecisionsCompleted();

    // Respond with the decisionsCompleted in JSON format
    res.json(decisionsCompleted);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const getCurrentDecisions = async (req, res, next) => {
  try {
    // Fetch all currentDecisions from the database
    const currentDecisions = await tables.decision.getCurrentDecisions();

    // Respond with the currentDecisions in JSON format
    res.json(currentDecisions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  browseLate,
  read,
  readByRole,
  updatePicture,
  createDecision,
  updateDecision,
  getExperts,
  getImpacted,
  getRelatedDecisions,
  getDecisionsCompleted,
  getCurrentDecisions,
  // destroy,
};
