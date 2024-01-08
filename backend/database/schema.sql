CREATE TABLE user (
  user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  /* frontend sends "Americas", "France", "Lebanon", "Philippines" or "West Africa" */
  location VARCHAR(255) NOT NULL,
  picture VARCHAR(255)
);

CREATE TABLE authentication (
  authentication_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  hashed_password TEXT, 
  date DATE,
  hour TIME,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE admin (
  admin_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(user_id) 
);

CREATE TABLE decision (
  decision_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  decision_date DATE NOT NULL,
  /* frontend sends one of those statuses: 
  "Prise de décision commencée"
  "Première décision prise"
  "Conflit sur la décision"
  "Décision définitive"
  "Décision non aboutie"
  "Décision terminée" */
  status VARCHAR(50) NOT NULL,
  decision_title VARCHAR(150) NOT NULL,
  decision_maker_id INT,
  FOREIGN KEY (decision_maker_id) REFERENCES user(user_id)
);

CREATE TABLE assignment (
	assignment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  /* frontend sends "Expert" or "Impacté" */
  role VARCHAR(10) NOT NULL,
  decision_id INT NOT NULL,
  assigned_id INT NOT NULL,
  FOREIGN KEY (decision_id) REFERENCES decision(decision_id),
  FOREIGN KEY (assigned_id) REFERENCES user(user_id)
  );

CREATE TABLE comment (
  comment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment_date_time DATETIME NOT NULL,
  comment_content TEXT NOT NULL,
  comment_maker_id INT,
  decision_id INT,
  FOREIGN KEY (comment_maker_id) REFERENCES user(user_id),
  FOREIGN KEY (decision_id) REFERENCES decision(decision_id)
);

CREATE TABLE paragraph (
  paragraph_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  /* frontend sends one of those titles:
  "Détails de la décision"
  "Impact sur l'organisation"
  "Bénéfices"
  "Risques" 
  "Première décision prise"
  "Décision définitive" */
  paragraph_title VARCHAR(50) NOT NULL,
  paragraph_content TEXT NOT NULL,
  decision_id INT,
  FOREIGN KEY (decision_id) REFERENCES decision(decision_id)
);