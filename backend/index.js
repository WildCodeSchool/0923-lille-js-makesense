// Load environment variables from .env file
require("dotenv").config();
const path = require("path");
const express = require("express");

// Import the Express application from src/app.js
const app = require("./src/app");

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

// Server for images handling

app.use(
  "/images",
  express.static(path.join(__dirname, "/public/assets/images"))
);
