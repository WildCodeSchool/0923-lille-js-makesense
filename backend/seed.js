/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("SET FOREIGN_KEY_CHECKS = 0"); // prevents control of foreign keys due to contracts
    await database.query("TRUNCATE user");
    await database.query("TRUNCATE authentication");
    await database.query("TRUNCATE admin");
    await database.query("TRUNCATE decision");
    await database.query("TRUNCATE assignment");
    await database.query("TRUNCATE comment");
    await database.query("TRUNCATE paragraph");
    // TRUNCATE table

    // Insert fake data into the table

    queries.push(
      database.query(
        `INSERT INTO user (lastname, firstname, email, location, picture) VALUES
          ('Doe', 'John', 'john.doe@yopmail.com', 'Americas', 'http://placekitten.com/200/300'),
          ('Martin', 'Mireille', 'mireille.martin@yopmail.com', 'France', 'http://placekitten.com/200/301'),
          ('Khoury', 'Bob', 'rami.azar@yopmail.com', 'Lebanon', 'http://placekitten.com/200/302'),
          ('Garcia', 'Alice', 'alice.brown@yopmail.com', 'Philippines', 'http://placekitten.com/200/303'),
          ('Nkozi', 'Chris', 'chris.davis@yopmail.com', 'West Africa', 'http://placekitten.com/200/304'),
          ('Jones', 'Martin', 'martin.jones@yopmail.com', 'Americas', 'http://placekitten.com/200/305'),
          ('Durand', 'Jane', 'jane.smith2@yopmail.com', 'France', 'http://placekitten.com/200/306'),
          ('Azar', 'Rami', 'rami.azar@yopmail.com', 'Lebanon', 'http://placekitten.com/200/307'),
          ('Mendoza', 'Danielle', 'danielle.mendoza@yopmail.com', 'Philippines', 'http://placekitten.com/200/308'),
          ('Moyo', 'Eduardo', 'eduardo.moyo@yopmail.com', 'West Africa', 'http://placekitten.com/200/309'),
          ('Miller', 'Julia', 'julia.miller@yopmail.com', 'Americas', 'http://placekitten.com/200/310'),
          ('Petit', 'Chris', 'chris.petit@yopmail.com', 'France', 'http://placekitten.com/200/311'),
          ('Abboud', 'Antoine', 'antoine.abboud@yopmail.com', 'Lebanon', 'http://placekitten.com/200/312'),
          ('Bautista', 'Alice', 'alice.bautista@yopmail.com', 'Philippines', 'http://placekitten.com/200/313'),
          ('Musa', 'Chris', 'chris.musa@yopmail.com', 'West Africa', 'http://placekitten.com/200/314'),
          ('Smith', 'Juliana', 'juliana.smith@yopmail.com', 'Americas', 'http://placekitten.com/200/315'),
          ('Smith', 'John', 'john.smith@yopmail.com', 'Americas', 'http://placekitten.com/200/316'),
          ('Durand', 'Jane', 'jane.durand@yopmail.com', 'France', 'http://placekitten.com/200/317'),
          ('Khoury', 'Rami', 'rami.khoury@yopmail.com', 'Lebanon', 'http://placekitten.com/200/318'),
          ('Garcia', 'Alice', 'alice.garcia@yopmail.com', 'Philippines', 'http://placekitten.com/200/319'),
          ('Nkozi', 'Chris', 'chris.nkozi@yopmail.com', 'West Africa', 'http://placekitten.com/200/320'),
          ('Jones', 'Martin', 'martin.jones@yopmail.com', 'Americas', 'http://placekitten.com/200/321'),
          ('Durand', 'Jane', 'jane.durand2@yopmail.com', 'France', 'http://placekitten.com/200/322'),
          ('Azar', 'Rami', 'rami.azar2@yopmail.com', 'Lebanon', 'http://placekitten.com/200/323'),
          ('Mendoza', 'Alice', 'alice.mendoza@yopmail.com', 'Philippines', 'http://placekitten.com/200/324'),
          ('Moyo', 'Chris', 'chris.moyo@yopmail.com', 'West Africa', 'http://placekitten.com/200/325'),
          ('Miller', 'Julia', 'julia.miller@yopmail.com', 'Americas', 'http://placekitten.com/200/326'),
          ('Petit', 'Chris', 'chris.petit@yopmail.com', 'France', 'http://placekitten.com/200/327'),
          ('Abboud', 'Antoine', 'antoine.abboud@yopmail.com', 'Lebanon', 'http://placekitten.com/200/328'),
          ('Bautista', 'Alice', 'alice.bautista@yopmail.com', 'Philippines', 'http://placekitten.com/200/329'),
          ('Williams', 'Liam', 'liam.williams@yopmail.com', 'Americas', 'http://placekitten.com/200/330');`
      )
    );

    // Insert the hashing passwords middleware in this query
    queries.push(
      database.query(
        `INSERT INTO authentication (hashed_password, auth_date_time, user_id) VALUES
        ('password123', '2023-01-01 12:00:00', 1),
        ('password456', '2023-02-02 12:00:00', 2),
        ('password123', '2023-01-01 12:00:00', 3),
        ('password456', '2023-02-02 12:00:00', 4),
        ('password123', '2023-01-01 12:00:00', 5),
        ('password456', '2023-02-02 12:00:00', 6),
        ('password123', '2023-01-01 12:00:00', 7),
        ('password456', '2023-02-02 12:00:00', 8),
        ('password123', '2023-01-01 12:00:00', 9),
        ('password456', '2023-02-02 12:00:00', 10),
        ('password123', '2023-01-01 12:00:00', 11),
        ('password456', '2023-02-02 12:00:00', 12),
        ('password123', '2023-01-01 12:00:00', 13),
        ('password456', '2023-02-02 12:00:00', 14),
        ('password123', '2023-01-01 12:00:00', 15),
        ('password456', '2023-02-02 12:00:00', 16),
        ('password123', '2023-01-01 12:00:00', 17),
        ('password456', '2023-02-02 12:00:00', 18),
        ('password123', '2023-01-01 12:00:00', 19),
        ('password456', '2023-02-02 12:00:00', 20),
        ('password123', '2023-01-01 12:00:00', 21),
        ('password456', '2023-02-02 12:00:00', 22),
        ('password123', '2023-01-01 12:00:00', 23),
        ('password456', '2023-02-02 12:00:00', 24),
        ('password123', '2023-01-01 12:00:00', 25),
        ('password456', '2023-02-02 12:00:00', 26),
        ('password123', '2023-01-01 12:00:00', 27),
        ('password456', '2023-02-02 12:00:00', 28),
        ('password123', '2023-01-01 12:00:00', 29),
        ('password123', '2023-01-01 12:00:00', 30),
        ('password456', '2023-02-02 12:00:00', 31);`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO decision (decision_date,decision_delay, status, decision_title, user_id) VALUES
          ('2023-01-01',"Court terme (2 semaines)", 'Prise de décision commencée', 'Decision 1', 1),
          ('2023-02-02', "Court terme (2 semaines)", 'Première décision prise', 'Decision 2', 2),
          ('2023-03-03',"Moyen terme (un mois)", 'Conflit sur la décision', 'Decision 3', 3),
          ('2023-04-04',"Moyen terme (un mois)", 'Décision définitive', 'Decision 4', 4),
          ('2023-05-05',"Moyen terme (un mois)", 'Décision non aboutie', 'Decision 5', 5),
          ('2023-06-06',"Court terme (2 semaines)", 'Décision terminée', 'Decision 6', 6),
          ('2023-07-07',"Moyen terme (un mois)", 'Décision non aboutie', 'Decision 7', 7),
          ('2023-08-08',"Moyen terme (un mois)", 'Décision terminée', 'Decision 8', 8),
          ('2023-09-09',"long terme (deux mois)", 'Conflit sur la décision', 'Decision 9', 9),
          ('2023-10-10',"long terme (deux mois)", 'Prise de décision commencée', 'Decision 10', 10),
          ('2023-11-11',"long terme (deux mois)", 'Décision définitive', 'Decision 11', 11),
          ('2023-12-12',"long terme (deux mois)", 'Première décision prise', 'Decision 12', 12);`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO assignment (date, decision_id, user_id, role) VALUES
          ('2023-01-01', 1, 20, 'Expert'),
          ('2023-02-02', 1, 2, 'Impacté'),
          ('2023-03-03', 1, 3, 'Expert'),
          ('2023-04-04', 1, 4, 'Impacté'),
          ('2023-05-05', 2, 5, 'Expert'),
          ('2023-06-06', 2, 6, 'Impacté'),
          ('2023-07-07', 3, 7, 'Expert'),
          ('2023-08-08', 3, 8, 'Impacté'),
          ('2023-09-09', 3, 9, 'Expert'),
          ('2023-10-10', 4, 10, 'Impacté'),
          ('2023-11-11', 4, 11, 'Expert'),
          ('2023-12-12', 5, 12, 'Impacté'),
          ('2023-10-10', 5, 13, 'Impacté'),
          ('2023-11-11', 6, 14, 'Expert'),
          ('2023-10-10', 6, 15, 'Impacté'),
          ('2023-11-11', 7, 16, 'Expert'),
          ('2023-10-10', 7, 17, 'Impacté'),
          ('2023-11-11', 8, 18, 'Expert'),
          ('2023-10-10', 8, 19, 'Impacté'),
          ('2023-11-11', 9, 20, 'Expert'),
          ('2023-10-10', 9, 21, 'Impacté'),
          ('2023-11-11', 10, 22, 'Expert'),
          ('2023-10-10', 10, 23, 'Impacté'),
          ('2023-11-11', 11, 24, 'Expert'),
          ('2023-10-10', 11, 25, 'Impacté'),
          ('2023-11-11', 12, 26, 'Expert'),
          ('2023-10-10', 12, 27, 'Impacté');`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO admin (user_id) VALUES
          (1),
          (2),
          (3),
          (4),
          (5);`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO comment (comment_date_time, comment_content, user_id, decision_id) VALUES
          ('2023-01-01 08:00:00', 'Comment 1 content', 3, 1),
          ('2023-02-02 10:30:00', 'Comment 2 content', 20, 1),
          ('2023-03-03 14:45:00', 'Comment 3 content', 2, 1),
          ('2023-04-04 12:15:00', 'Comment 4 content', 4, 2),
          ('2023-05-05 09:20:00', 'Comment 5 content', 5, 2),
          ('2023-06-06 11:10:00', 'Comment 6 content', 6, 2),
          ('2023-07-07 15:30:00', 'Comment 7 content', 7, 2),
          ('2023-08-08 13:45:00', 'Comment 8 content', 8, 3),
          ('2023-09-09 10:00:00', 'Comment 9 content', 9, 3),
          ('2023-10-10 16:00:00', 'Comment 10 content', 13, 5),
          ('2023-11-11 11:30:00', 'Comment 11 content', 11, 6),
          ('2023-12-12 14:45:00', 'Comment 12 content', 14, 6),
          ('2024-01-01 12:15:00', 'Comment 13 content', 15, 6),
          ('2023-02-02 09:20:00', 'Comment 14 content', 14, 7),
          ('2023-03-03 11:10:00', 'Comment 15 content', 17, 7),
          ('2023-04-04 15:30:00', 'Comment 16 content', 1, 8),
          ('2023-05-05 13:45:00', 'Comment 17 content', 2, 8),
          ('2023-06-06 10:00:00', 'Comment 18 content', 18, 8),
          ('2023-07-07 16:30:00', 'Comment 19 content', 21, 9),
          ('2023-08-08 14:45:00', 'Comment 20 content', 24, 10),
          ('2023-09-09 11:00:00', 'Comment 21 content', 23, 10),
          ('2023-10-10 17:15:00', 'Comment 22 content', 22, 10),
          ('2023-11-11 12:30:00', 'Comment 23 content', 23, 1),
          ('2023-12-12 15:45:00', 'Comment 24 content', 24, 2),
          ('2023-01-01 13:00:00', 'Comment 25 content', 25, 3),
          ('2023-02-02 10:15:00', 'Comment 26 content', 26, 5),
          ('2023-03-03 12:30:00', 'Comment 27 content', 27, 6),
          ('2023-04-04 16:45:00', 'Comment 28 content', 28, 7),
          ('2023-05-05 14:00:00', 'Comment 29 content', 29, 8),
          ('2023-06-06 11:15:00', 'Comment 30 content', 30, 9);`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO paragraph (paragraph_title, paragraph_content, decision_id) VALUES
          ('Détails de la décision', 'Paragraph 1 content', 1),
          ("Impact sur l'organisation", 'Paragraph 2 content', 1),
          ('Bénéfices', 'Paragraph 3 content', 1),
          ('Risques', 'Paragraph 4 content', 1),
          ('Détails de la décision', 'Paragraph 5 content', 2),
          ("Impact sur l'organisation", 'Paragraph 6 content', 2),
          ('Bénéfices', 'Paragraph 7 content', 2),
          ('Risques', 'Paragraph 8 content', 2),
          ('Détails de la décision', 'Paragraph 9 content', 3),
          ("Impact sur l'organisation", 'Paragraph 10 content', 3),
          ('Bénéfices', 'Paragraph 11 content', 3),
          ('Risques', 'Paragraph 12 content', 3),
          ('Détails de la décision', 'Paragraph 13 content', 4),
          ("Impact sur l'organisation", 'Paragraph 14 content', 4),
          ('Bénéfices', 'Paragraph 15 content', 4),
          ('Risques', 'Paragraph 16 content', 4),
          ('Détails de la décision', 'Paragraph 17 content', 5),
          ("Impact sur l'organisation", 'Paragraph 18 content', 5),
          ('Bénéfices', 'Paragraph 19 content', 5),
          ('Risques', 'Paragraph 20 content', 5),
          ('Détails de la décision', 'Paragraph 21 content', 6),
          ("Impact sur l'organisation", 'Paragraph 22 content', 6),
          ('Bénéfices', 'Paragraph 23 content', 6),
          ('Risques', 'Paragraph 24 content', 6),
          ('Détails de la décision', 'Paragraph 25 content', 7),
          ("Impact sur l'organisation", 'Paragraph 26 content', 7),
          ('Bénéfices', 'Paragraph 27 content', 7),
          ('Risques', 'Paragraph 28 content', 7),
          ('Détails de la décision', 'Paragraph 29 content', 8),
          ("Impact sur l'organisation", 'Paragraph 30 content', 8),
          ('Bénéfices', 'Paragraph 31 content', 8),
          ('Risques', 'Paragraph 32 content', 8),
          ('Détails de la décision', 'Paragraph 33 content', 9),
          ("Impact sur l'organisation", 'Paragraph 34 content', 9),
          ('Bénéfices', 'Paragraph 35 content', 9),
          ('Risques', 'Paragraph 36 content', 9),
          ('Détails de la décision', 'Paragraph 37 content', 10),
          ("Impact sur l'organisation", 'Paragraph 38 content', 10),
          ('Bénéfices', 'Paragraph 39 content', 10),
          ('Risques', 'Paragraph 40 content', 10),
          ('Détails de la décision', 'Paragraph 41 content', 11),
          ("Impact sur l'organisation", 'Paragraph 42 content', 11),
          ('Bénéfices', 'Paragraph 43 content', 11),
          ('Risques', 'Paragraph 44 content', 11),
          ('Détails de la décision', 'Paragraph 45 content', 12),
          ("Impact sur l'organisation", 'Paragraph 46 content', 12),
          ('Bénéfices', 'Paragraph 47 content', 12),
          ('Risques', 'Paragraph 48 content', 12),
          ('Première décision prise', 'Paragraph 49 content', 1),
          ('Première décision prise', 'Paragraph 50 content', 3),
          ('Première décision prise', 'Paragraph 51 content', 6),
          ('Première décision prise', 'Paragraph 52 content', 7),
          ('Première décision prise', 'Paragraph 53 content', 8),
          ('Première décision prise', 'Paragraph 54 content', 9),
          ('Première décision prise', 'Paragraph 55 content', 10),
          ('Décision définitive', 'Paragraph 56 content', 1),
          ('Décision définitive', 'Paragraph 57 content', 7),
          ('Décision définitive', 'Paragraph 58 content', 8),
          ('Décision définitive', 'Paragraph 59 content', 10);`
      )
    );

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
