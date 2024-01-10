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

    queries.push(
      database.query(
        `INSERT INTO authentication (hashed_password, auth_date_time, user_id) VALUES
        ('$argon2d$v=19$m=19456,t=2,p=4$nU9m4qAA9pdQ7YYbB6aI8Q$Ud6bSwDMbKaHqtmA318jx511nlV0n0jQVOEpwySzoRk
        ', '2023-01-01 12:00:00', 1),
        ('$argon2d$v=19$m=19456,t=2,p=4$XwyAKmQlAeAi7PW60gJPOQ$z4ENq/VJDQkwRLxo6HgLCnLLBN9Y1kPcXE2FtYbjylY
        ', '2023-02-02 12:00:00', 2),
        ('$argon2d$v=19$m=19456,t=2,p=4$3Bk5mG5CEhT3byeXH8VBFg$4r/RlZOgLsUAdoKrjku0Wcuu1m+OvINX5IHkE2ZQylw
        ', '2023-01-01 12:00:00', 3),
        ('$argon2d$v=19$m=19456,t=2,p=4$o9bpHP/M5ErjoFmA/xQ2mw$7LK1bNblhk3yRhJxOZsVsBkb1MWAtyNObgHayTd1jSQ
        ', '2023-02-02 12:00:00', 4),
        ('$argon2d$v=19$m=19456,t=2,p=4$kU7HZ3LvpjK5Of5g9yJmWw$IEN3DcMnC4wUcwtOH18934+aXWxKEWa2lFGjAvuTlHs
        ', '2023-01-01 12:00:00', 5),
        ('$argon2d$v=19$m=19456,t=2,p=4$5ft8OFyck5VvE/LzoLWuWQ$O0dInbPTSvsEdm/xqQWVct5nP9DW234YrAqsXW7dVgE
        ', '2023-02-02 12:00:00', 6),
        ('$argon2d$v=19$m=19456,t=2,p=4$OxkHzGSFoOB6FxBvCguaNw$xzaRO04BC1rjIitP5egUvg4XqwNBMeQzQ6mhKkTbPtg
        ', '2023-01-01 12:00:00', 7),
        ('$argon2d$v=19$m=19456,t=2,p=4$Tb8+OwSNK0wBZlAeLZVacA$MfYZTEeyWwzlRfTg8BK1DAkU3SpOg+mosrYbaMuRPeg
        ', '2023-02-02 12:00:00', 8),
        ('$argon2d$v=19$m=19456,t=2,p=4$SsnHsf6d3TJSHINpflAliQ$FjV+gq/dasN5tYsVajmRfxNViJeS3zb61ShJ2y2Xkps
        ', '2023-01-01 12:00:00', 9),
        ('$argon2d$v=19$m=19456,t=2,p=4$JowPhVTZYY1CXU+kIj1D6g$ilmf5Y8poS84XpCxaZX9VmFPVSBUqI77eW1fD++UDj4
        ', '2023-02-02 12:00:00', 10),
        ('$argon2d$v=19$m=19456,t=2,p=4$5c6nKHmcu1ZX+c+ikgOFSQ$Qa+fhYTU1CPSi0nqzZYCruvSTo2xVgip1IewyDuIiUU
        ', '2023-01-01 12:00:00', 11),
        ('$argon2d$v=19$m=19456,t=2,p=4$DHQycHGwE+rMDT6f2PNsUg$JdGCfYgr3hOMROOkty6lttGsHG1tbTpUdA1KzBPOSog
        ', '2023-02-02 12:00:00', 12),
        ('$argon2d$v=19$m=19456,t=2,p=4$u+7ma/Mq0Ul+t5kjlSKPVQ$YxfyWoueOT870r1m/QCowHBrSjJQSHzdU3J+gTiLpLM
        ', '2023-01-01 12:00:00', 13),
        ('$argon2d$v=19$m=19456,t=2,p=4$oJrAqIGD4zd8la4ueW0SHQ$XOu1moqK4wa+5M8M4RucPQssB54MlBEDJuCWtvYrrTw
        ', '2023-02-02 12:00:00', 14),
        ('$argon2d$v=19$m=19456,t=2,p=4$uTXsb6HNyQedj/kIqBKh3w$YcHJGxVo0hxAAp8bL1oFVnhjLHpN2T7k/8zv74Y6Y7A
        ', '2023-01-01 12:00:00', 15),
        ('$argon2d$v=19$m=19456,t=2,p=4$OlDpRmaVzXu7DOnegox6ng$/NRlTedKid/4Ps48SQyJ/a3X4x0No3f34bVKmevvLn0
        ', '2023-02-02 12:00:00', 16),
        ('$argon2d$v=19$m=19456,t=2,p=4$d5+r04CPS8o1fLiCznGb0w$3Rje40oTSjEN4k/jnF6F2wUs8cZ0KsSPClvFKr8NgTY
        ', '2023-01-01 12:00:00', 17),
        ('$argon2d$v=19$m=19456,t=2,p=4$QdzHIjnJYx/Jy7xczAik5Q$XNpsla/3X+LBIA/P/mY7nGSE8ky6qfS7PAtrdPE/UDw
        ', '2023-02-02 12:00:00', 18),
        ('$argon2d$v=19$m=19456,t=2,p=4$9j+BkmlI5fkXj/PgS8tkmQ$oTtwAx6zPPgHq7jGlIuVCQd9HWqISUOYtYic3nIqoP4
        ', '2023-01-01 12:00:00', 19),
        ('$argon2d$v=19$m=19456,t=2,p=4$qLxLIjIVPDA9gSmibCugvg$vj4NUoyrgx7UwH66HrWfqN42S5EMEyzXsA9w4uXlmvE
        ', '2023-02-02 12:00:00', 20),
        ('$argon2d$v=19$m=19456,t=2,p=4$3BszN5l+bGAak/17SMF+jw$UQz0R7srA4kBJfndVBuQiqUPiqXrGL1ByL/9Wod7DyE
        ', '2023-01-01 12:00:00', 21),
        ('$argon2d$v=19$m=19456,t=2,p=4$brxJkRFVE714pcR0+BwPIg$JLaZComYjEgPxu/uosOADB76NTSh+MQtoXqPD2sb0QM
        ', '2023-02-02 12:00:00', 22),
        ('$argon2d$v=19$m=19456,t=2,p=4$oIsEJ+M8uJ+Yz4gsZQNJ6w$oZsbsq60a7Wjh1yYUAAlkP75iBstthl/F1uGcEKVxAA
        ', '2023-01-01 12:00:00', 23),
        ('$argon2d$v=19$m=19456,t=2,p=4$VBYBmX9vMk4IlaescIdtiQ$dlckt3EATYPXyQByAg6YLwHynUVecpJycx78DsE4riY
        ', '2023-02-02 12:00:00', 24),
        ('$argon2d$v=19$m=19456,t=2,p=4$GIJFAPPanUx4l0IH91IOxA$qQkCl8Uk15VV3H2hdzbBF/6Ui7ivP8qAQBA/3S0aQFc
        ', '2023-01-01 12:00:00', 25),
        ('$argon2d$v=19$m=19456,t=2,p=4$+ACJNE7vakxjk8KQUzgJ8w$b9zyWXYDE9r8Ck0G34wZJVQhyEW2rtzIhaiNd9764AU
        ', '2023-02-02 12:00:00', 26),
        ('$argon2d$v=19$m=19456,t=2,p=4$CWfsskG4UiQuFqgRA+VDgQ$dBb4PsMBqmFoGBpbesICvt5GnCbTqOdePV7FB3A1Pso
        ', '2023-01-01 12:00:00', 27),
        ('$argon2d$v=19$m=19456,t=2,p=4$m14YeV9E9OspEe0sHnd0GQ$4IatEbK0jtUJ+4PnGdaT89+TXR9xmQG67O96ZSi0ios
        ', '2023-02-02 12:00:00', 28),
        ('$argon2d$v=19$m=19456,t=2,p=4$77Qb1M5qIONe0Ec0isW6Kw$PnI6Awu05hWK0WFNOP20nq38OyLbmBeoZKcMLNbFXWw
        ', '2023-01-01 12:00:00', 29),
        ('$argon2d$v=19$m=19456,t=2,p=4$3qGus/VLTciHMypPJ8R7EQ$0bLM+lHuKDgAU6xFxivyN1eZLvIRSVqYSeS2l3KTolA
        ', '2023-01-01 12:00:00', 30),
        ('$argon2d$v=19$m=19456,t=2,p=4$kczl0+wLd7ZPE14BW/iraw$4SOi7zWIkhQemiPbkjZUruYp0JbpPAL+5DbP8oCV3H0
        ', '2023-02-02 12:00:00', 31);`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO decision (decision_date, status, decision_title, user_id) VALUES
          ('2023-01-01', 'Prise de décision commencée', 'Decision 1', 1),
          ('2023-02-02', 'Première décision prise', 'Decision 2', 2),
          ('2023-03-03', 'Conflit sur la décision', 'Decision 3', 3),
          ('2023-04-04', 'Décision définitive', 'Decision 4', 4),
          ('2023-05-05', 'Décision non aboutie', 'Decision 5', 5),
          ('2023-06-06', 'Décision terminée', 'Decision 6', 6),
          ('2023-07-07', 'Décision non aboutie', 'Decision 7', 7),
          ('2023-08-08', 'Décision terminée', 'Decision 8', 8),
          ('2023-09-09', 'Conflit sur la décision', 'Decision 9', 9),
          ('2023-10-10', 'Prise de décision commencée', 'Decision 10', 10),
          ('2023-11-11', 'Décision définitive', 'Decision 11', 11),
          ('2023-12-12', 'Première décision prise', 'Decision 12', 12);`
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
