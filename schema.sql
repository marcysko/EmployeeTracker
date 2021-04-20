DROP DATABASE IF EXISTS employeeTrack_DB;
CREATE DATABASE employeeTrack_DB;

USE employeeTrack_DB;

CREATE TABLE department(
  dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30)
);
CREATE TABLE role(
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  dept_id INT REFERENCES department(dept_id),
  FOREIGN KEY(dept_id) REFERENCES department(dept_id) ON DELETE CASCADE
);
CREATE TABLE employee(
  emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL REFERENCES role(role_id),
  manager_id INT REFERENCES employee(emp_id),
  FOREIGN KEY(role_id) REFERENCES role(role_id) ON DELETE CASCADE,
  FOREIGN KEY(manager_id) REFERENCES employee(emp_id) ON DELETE CASCADE
);

