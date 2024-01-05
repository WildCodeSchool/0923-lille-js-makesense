/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("SET FOREIGN_KEY_CHECKS = 0"); //
    await database.query("TRUNCATE user");
    await database.query("TRUNCATE authentication");
    await database.query("TRUNCATE decision_maker");
    await database.query("TRUNCATE employee");
    await database.query("TRUNCATE decision");
    await database.query("TRUNCATE assignement");
    await database.query("TRUNCATE admin");
    await database.query("TRUNCATE comment");
    await database.query("TRUNCATE paragraph");
    // TRUNCATE table

    // Insert fake data into the table

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO user(lastname, firstname, email, location, picture, role) VALUES (?,?,?,?,?,?)",
          [
            faker.lorem.word(),
            faker.lorem.word(),
            faker.internet.email(),
            faker.lorem.word(),
            faker.internet.avatar(),
            faker.lorem.word(),
          ]
        )
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO authentication (password, date, hour,user_id) VALUES (?,?,?,?)",
          [
            faker.internet.password(),
            faker.date.past(),
            faker.date.recent(),
            faker.number.int({ min: 1, max: 30 }),
          ]
        )
      );
    }
    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query("INSERT INTO decision_maker (user_id) VALUES (?)", [
          faker.number.int({ min: 1, max: 30 }),
        ])
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query("INSERT INTO employee (user_id) VALUES (?)", [
          faker.number.int({ min: 1, max: 30 }),
        ])
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO decision (date, status, title, decision_maker_id) VALUES (?,?,?,?)",
          [
            faker.date.past(),
            "pending",
            faker.lorem.paragraph(1),
            faker.number.int({ min: 1, max: 30 }),
          ]
        )
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO assignement (decision_maker_id,employee_id,decision_id) VALUES (?,?,?)",
          [
            faker.number.int({ min: 1, max: 30 }),
            faker.number.int({ min: 1, max: 30 }),
            faker.number.int({ min: 1, max: 30 }),
          ]
        )
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query("INSERT INTO admin (user_id) VALUES (?)", [
          faker.number.int({ min: 1, max: 30 }),
        ])
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO comment (date_time,message,employee_id,admin_id,decision_id) VALUES (?,?,?,?,?)",

          [
            faker.date.recent(),
            faker.lorem.paragraph(1),
            faker.number.int({ min: 1, max: 30 }),
            faker.number.int({ min: 1, max: 30 }),
            faker.number.int({ min: 1, max: 30 }),
          ]
        )
      );
    }

    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO paragraph (title,contains,decision_id) VALUES (?,?,?)",

          [
            faker.lorem.paragraph(1),
            faker.lorem.paragraph(3),
            faker.number.int({ min: 1, max: 30 }),
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
