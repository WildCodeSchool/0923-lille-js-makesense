// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all paragraphs from the database
    const paragraphs = await tables.paragraph.readAll();

    // Respond with the paragraphs in JSON format
    res.json(paragraphs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific paragraph from the database based on the provided decision ID
    const content = await tables.paragraph.read(req.params.id);
    // If the paragraphs are not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the paragraphs in JSON format
    if (content == null) {
      res.sendStatus(404);
    } else {
      res.json(content);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByRole = async (req, res, next) => {
  try {
    // Fetch a specific paragraph's role from the database based on the provided ID
    const paragraph = await tables.paragraph.readByRole(req.params.id);
    // If the paragraph is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the paragraph in JSON format
    if (paragraph == null) {
      res.sendStatus(404);
    } else {
      res.json(paragraph);
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
    const paragraph = await tables.paragraph.updatePicture(id, req.body);
    if (paragraph == null) {
      res.sendStatus(404);
    } else {
      res.json(paragraph);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the paragraph data from the request body
  const paragraph = req.body;
  try {
    // Insert the paragraph into the database
    const insertId = await tables.paragraph.create(paragraph);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted paragraph
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
