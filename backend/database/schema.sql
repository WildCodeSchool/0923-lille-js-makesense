CREATE table user (
user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
lastname VARCHAR(100) NOT NULL,
firstname VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
location VARCHAR(100) NOT NULL,
picture IMAGE,
role VARCHAR(100)
)

CREATE table authentification (
  authentification_id  INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  password TEXT NOT NULL,
  date DATE NOT NULL,
  hour TIME NOT NULL,
  FOREIGN KEY (user_id) 
)


CREATE table decide_maker(
decide_maker_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
FOREIGN KEY (user_id)
)

CREATE table employee(
  employee_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (user_id)
)

CREATE table decision(
  decision_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  FOREIGN KEY (decide_maker_id),
)

CREATE table assignement(
  assignement_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (decide_maker_id),
  FOREIGN KEY (employee_id),
  FOREIGN KEY (decision_id)
)


CREATE table admin (
  admin_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (user_id)
)


CREATE table comment (
comment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_time DATETIME NOT NULL,
message VARCHAR(100) NOT NULL,
FOREIGN KEY (employee_id),
FOREIGN KEY (admin_id),
FOREIGN KEY (decision_id)
)

CREATE table paragraph(
  paragraph_id PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) NOT NULL,
  contains TEXT NOT NULL,
  FOREIGN KEY (decision_id)
)
