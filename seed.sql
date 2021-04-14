-- DEPARTMENT -----
INSERT INTO department (dept_name)
VALUES 
  ("Customer Service"),
  ("IT"),
  ("Marketing"),
  ("Business Travel"),
  ("Human Resources"),
  ("Financial");

-- EMPLOYEE ROLES -------
INSERT INTO roles (title, salary, department_id) 
VALUES
  ("Lead Engineer", 150000, 2),
  ("Legal Team Lead", 250000, 4),
  ("Accountant", 125000, 3);

  -- EMPLOYEES -------

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Sam", "Hunt", null, 1);
