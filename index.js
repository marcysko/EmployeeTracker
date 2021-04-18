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