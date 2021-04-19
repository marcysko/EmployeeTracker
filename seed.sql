USE employeeTrack_DB;

-- Department -----
INSERT INTO department (dept_id , dept_name)
VALUES (1, "Customer Service");

INSERT INTO department (dept_id , dept_name)
VALUES (2, "IT");

INSERT INTO department (dept_id , dept_name)
VALUES (3, "Marketing");

INSERT INTO department (dept_id , dept_name)
VALUES (4, "Business Travel");

INSERT INTO department (dept_id , dept_name)
VALUES (5, "HR");

INSERT INTO department (dept_id , dept_name)
VALUES (6, "Financial");

-- Roles ---
INSERT INTO role (role_id, title, salary, dept_id)
VALUES (1, "Customer Service Agent", 30000, 1);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (2, "Client Care Manager", 71000, 1);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (3, "Business Analyst", 68000, 2);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (4, "Network Engineer", 71000, 2);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (5, "Web Marketing Specialist", 49000, 3);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (6, "Chief Marketing Officer", 125000, 3);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (7, "Business Travel Manager", 77500, 4);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (8, "Travel Coordinator", 35500, 4);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (9, "Human Resources Administrator", 65000, 5);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (10, "Recruiter", 46800, 5);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (11, "Chief Financial Officer", 182000, 6);

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (12, "Budget Analyst", 67900, 6);


-- Employees ------

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Frostee", "Rucker", 3, null);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (2, "HaHa", "Dix", 2, null);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Maria", "Gonzales", 6, null);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (4, "Babs", "Freudenmensch", 10, null);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Ingrid", "Chin", 7, null);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Carlotta", "Greenleaf", 4, 1);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (7, "Mohammed", "Olleeen", 8, 5);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (8, "Donald", "Trumpet", 1, 2);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (9, "Bobby", "Dimitriov", 9, 4);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUES (10, "Carol", "Lovejoy", 5, 3);