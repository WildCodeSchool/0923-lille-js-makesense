CREATE TABLE user (
  user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  picture VARCHAR(255),
  role VARCHAR(100)
)

CREATE TABLE authentication (
  authentication_id  INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  password text 
  date date 
  hour time 
  user_id INT
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)


CREATE TABLE decision_maker(
  decision_maker_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)

CREATE TABLE employee(
  employee_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)

CREATE TABLE decision(
  decision_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  decision_maker_id INT,
  FOREIGN KEY (decision_maker_id) REFERENCES decision_maker(decision_maker_id)
)

CREATE TABLE assignement(
  assignement_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  decision_maker_id INT,
  employee_id INT,
  decision_id INT,
  FOREIGN KEY (decision_maker_id) REFERENCES decision_maker(decision_maker_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (decision_id) REFERENCES decision(decision_id)
)


CREATE TABLE admin(
  admin_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(user_id) 
)

CREATE TABLE comment (
  comment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date_time DATETIME NOT NULL,
  message TEXT NOT NULL,
  employee_id INT,
  admin_id INT,
  decision_id INT,
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (admin_id) REFERENCES admin(admin_id),
  FOREIGN KEY (decision_id) REFERENCES decision(decision_id)
)

CREATE TABLE paragraph(
  paragraph_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) NOT NULL,
  contains TEXT NOT NULL,
  decision_id INT,
  FOREIGN KEY (decision_id) REFERENCES decision(decision_id)
)
