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
INSERT INTO roles (title, salary, dept_id) 
VALUES
  ("Customer Service Agent",35000,1),
  ("Client Care Manager",71000,1),
  ("Director of client services",125000,1),
  ("Business Analyst",68000,2),
  ("Network Engineer",71000,2,
  ("Help Desk Agent",38000,2),
  ("Chief Marketing Officer",125000,3),
  ("Web Marketing Specialist",49000,3),
  ("Travel Coordinator",35500,4),
  ("Business Travel Manager",77000,4),
  ("Project Analyst",44000,4),
  ("Human Resources Administrator",65000,5),
  ("Recruiter",46800,5),
  ("Trainer",47000,5),
  ("Chief Financial Officer",182000,6),
  ("Budget Analyst",67900,6),
  ("Financial Advisor",42300,6);


  -- EMPLOYEES ------

INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("No", "Manager",0);
INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Frostee", "Rucker",2);
INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("HaHa", "Dix",1,2);
INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Maria", "Gonzales",6);
INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Babs", "Freudenmensch",12);
INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Ingrid", "Chin",14);
INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Carlotta", "Greenleaf",16);
INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Mohammed", "Olleeen",20);