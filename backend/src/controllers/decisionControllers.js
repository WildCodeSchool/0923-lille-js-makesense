// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
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
const add = async (req, res, next) => {
  // Extract the decision data from the request body
  const decision = req.body;

  try {
    // Insert the decision into the database
    const insertId = await tables.decision.create(decision);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted decision
    res.status(201).json({ insertId });
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
  read,
  readByRole,
  updatePicture,
  add,
  // destroy,
};
