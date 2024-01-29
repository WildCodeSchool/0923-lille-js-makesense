// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browsePending = async (req, res, next) => {
  try {
    // Fetch all comments from the database
    const comments = await tables.decision.readAllPending();

    // Respond with the comments in JSON format
    res.json(comments);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch all comments from the database
    const comments = await tables.comment.readAll();

    // Respond with the comments in JSON format
    res.json(comments);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific comment from the database based on the provided ID
    const comment = await tables.comment.read(req.params.id);

    // If the decision is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the decision in JSON format
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByDecision = async (req, res, next) => {
  try {
    // Fetch a specific decision from the database based on the provided ID
    const comment = await tables.comment.readByDecision(req.params.id);

    // If the decision is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the decision in JSON format
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByRole = async (req, res, next) => {
  try {
    // Fetch a specific decision from the database based on the provided ID
    const comment = await tables.comment.readByRole(req.params.id);

    // If the decision is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the decision in JSON format
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const comment = await tables.comment.edit(id, req.body.picture);
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the decision data from the request body
  const { commentContent, userId } = req.body;
  const decisionId = parseInt(req.params.id, 10);
  try {
    // Insert the decision into the database
    const allComments = await tables.comment.create(
      commentContent,
      userId,
      decisionId
    );
    // Respond with HTTP 201 (Created) and the ID of the newly inserted decision
    res.status(201).json({ allComments });
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
  browsePending,
  read,
  readByDecision,
  readByRole,
  edit,
  add,
  // destroy,
};
