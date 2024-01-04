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

    await database.query("SET FOREIGN_KEY_CHECKS = 0"); // empeche le controle des foeigns keys a cause des contraints
    await database.query("truncate user");
    await database.query("truncate authentification");
    await database.query("truncate decide_maker");
    await database.query("truncate employee");
    await database.query("truncate decision");
    await database.query("truncate assignement");
    await database.query("truncate admin");
    await database.query("truncate comment");
    await database.query("truncate paragraph");
    // truncate table

    // Insert fake data into the table

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into user(lastname, firstname, email, location, picture, role) values (?,?,?,?,?,?)",
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

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into authentification (password, date, hour,user_id) values (?,?,?,?)",
          [
            faker.internet.password(),
            faker.date.past(),
            faker.date.recent(),
            faker.number.int({ min: 1, max: 2 }),
          ]
        )
      );
    }
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into decide_maker (user_id) values (?)", [
          faker.number.int({ min: 1, max: 5 }),
        ])
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into employee (user_id) values (?)", [
          faker.number.int({ min: 1, max: 5 }),
        ])
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into decision (date, status, title, decide_maker_id) values (?,?,?,?)",
          [
            faker.date.past(),
            "pending",
            faker.lorem.paragraph(1),
            faker.number.int({ min: 1, max: 5 }),
          ]
        )
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into assignement (decide_maker_id,employee_id,decision_id) values (?,?,?)",
          [
            faker.number.int({ min: 1, max: 5 }),
            faker.number.int({ min: 1, max: 5 }),
            faker.number.int({ min: 1, max: 5 }),
          ]
        )
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into admin (user_id) values (?)", [
          faker.number.int({ min: 1, max: 5 }),
        ])
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into comment (date_time,message,employee_id,admin_id,decision_id) values (?,?,?,?,?)",

          [
            faker.date.recent(),
            faker.lorem.paragraph(1),
            faker.number.int({ min: 1, max: 5 }),
            faker.number.int({ min: 1, max: 5 }),
            faker.number.int({ min: 1, max: 5 }),
          ]
        )
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into paragraph (title,contains,decision_id) values (?,?,?)",

          [
            faker.lorem.paragraph(1),
            faker.lorem.paragraph(3),
            faker.number.int({ min: 1, max: 5 }),
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
