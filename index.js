// add dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// add connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "D$V783?gd",
  database: "employeeTracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});
//main menu
function start() {
  inquirer.prompt([
    {
      name: "action",
      type: "rawlist",
      message: "What do you want to view?",
      choices: ["View Departments",
        "View Roles",
        "View Employees",
        "Finish"]
    }])
    .then(function (answer) {
      switch (answer.action) {
        case "View Departments":
          dept();
          break;

        case "View Roles":
          roles();
          break;

        case "View Employees":
          employees();
          break;

        case "Finish":
          finish();
          break;
      }
    });
}
// department menu
function dept() {
  inquirer.prompt([
    {
      name: "action",
      type: "rawlist",
      message: "What do you want to view?",
      choices: ["View Departments",
        "Add a Department",
        "Delete Department",
        "View Department Combined Salaries",
        "Return to Main Menu"
      ]
    }
  ])
  .then(function (answer) {
    switch (answer.action) {
      case "View Departments":
        viewDepartments();
        break;

      case "Add a Department":
        addDepartment();
        break;

      case "Delete Department":
        delDepartment();
        break;

      case "View Department Combined Salaries":
        deptBudget();
        break;

      case "Return to Main Menu":
        start();
        break;
    }
  });
}
// employees menu
function employees() {
  inquirer.prompt([
    {
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: ["View Employees",
        "Add an Employee",
        "Delete an Employee",
        "Update Employee Role",
        "Update Manager",
        "View Employees by Manager",
        "Return to Start Menu"]
    }])
    .then(function (answer) {
      switch (answer.action) {
        case "View Employees":
          viewEmployees();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Delete Employee":
          delEmployee();
          break;

        case "Update Employee Salary":
          updateEmployeeSalary();
          break;

        case "Update Manager":
          updateManager();
          break;

        case "View Employees by Manager":
          managerEmployees();
          break;

        case "Return to Main Menu":
          start();
          break;
      }
    });
}
// build end function to end session in app
function finish() {
  console.log("Thank you and be safe out there!")
  connection.end();
}
// build view department, selecting all from dept. table
// display using console.table dependency
async function viewDepartments() {
  var query = "SELECT name as Department, dept_id as 'Dept ID' FROM department"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
    setTimeout(start, 1000)
  })
};
// build view role, selecting all from role table
// display using console.table dependency
async function viewRoles() {
  var query = "SELECT title as Title, role_id as 'Role #', salary as Salary, department.name as Department FROM role LEFT JOIN department ON role.dept_id = department.dept_id"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
    setTimeout(start, 1000)
  })

};
// build view employee, selecting all from employee table
// display using console.table dependency
async function viewEmployees() {
  var query = "SELECT emp_id as 'ID #', first_name as First, last_name as Last, department.name as Department, role.title as Title, role.salary as Salary FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.dept_id = department.dept_id"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log("\n")
    console.table(res);
    setTimeout(start, 1000)
  })
};
// adding department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "dept",
        type: "input",
        message: "What department do you want to add?"
      }])
    .then(function (answer) {
      console.log(answer.dept)
      var query = `INSERT INTO department (name) VALUES ("${answer.dept}")`;
      connection.query(query, answer.dept, function (err, res) {
        if (err) throw err
        viewDepartments();
      })
    });
}
//adding roles
function addRole() {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What role do you want to add?"
    },
    {
      name: "salary",
      type: "input",
      message: "Please indicate the salary for that role."
    },
    {
      name: "dept",
      type: "input",
      message: "What is the department id for this role?:"
    }])
    .then(function (answer) {
      console.log(answer)
      var query = `INSERT INTO role (title,salary,dept_id) VALUES ("${answer.title}",${answer.salary},${answer.dept})`;
      connection.query(query, answer, function (err, res) {
        if (err) throw err
        viewRoles();
      })
    });
  }
  //adding employee
  function addEmployee() {
    inquirer.prompt([
      {
        name: "first",
        type: "input",
        message: "Enter the first name."
      },
      {
        name: "last",
        type: "input",
        message: "Enter the last name."
      },
      {
        name: "role",
        type: "input",
        message: "What is the role id?"
      },
      {
        name: "manager",
        type: "input",
        message: "What is the manager id?",
        default: 1
      }])
      .then(function (answer) {
        var query = `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("${answer.first}","${answer.last}",${answer.role},${answer.manager})`;
        connection.query(query, answer, function (err, res) {
          if (err) throw err
          viewEmployees();
        });
      });
  }
