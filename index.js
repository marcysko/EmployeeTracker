// add dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
let deptArr = [];
let roleArr = [];
let emplArr = [];
let managerArr = [];

// add connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "D$V783?gd",
  database: "employeeTrack_DB"
});
const startMenu = [
  {
    type: "list",
    name: "firstOption",
    message: "Please select an option.",
    choices: [
      "Add Employee",
      "Add Role",
      "Add Department",
      "View All Employees",
      "View All Employees By Role",
      "View All Employees By Department",
      "View All Roles",
      "View All Departments",
      "Update An Employee Role",
      "Exit",
    ],
  },
];
// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("\n Greetings \n");
  // run the start function after the connection is made to prompt the user
  init();
});

// Offer main menu then prompt next function based on response
function init() {
  inquirer.prompt(startMenu).then((response) => {
    switch (response.firstOption) {
      case "Add Employee":
        employee();
        break;
      case "Add Role":
        role();
        break;
      case "Add Department":
        department();
        break;
      case "View All Employees":
        viewEmployees();
        break;
      case "View All Employees By Role":
        viewByRole();
        break;
      case "View All Employees By Department":
        viewByDepartment();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "View All Departments":
        viewDepartments();
        break;
      case "Update An Employee Role":
        updateEmployee();
        break;
      case "Exit":
        connection.end();
        break;
      default:
        connection.end();
    }
  });
  // update arrays each time the init function is called
  getDepts();
  getRoles();
  getManagers();
}
// GET departments
function getDepts() {
  connection.query(`SELECT dept_name FROM department`, function (
    err,
    departments
  ) {
    if (err) throw err;
    deptArr = [];
    for (i = 0; i < departments.length; i++) {
      deptArr.push(departments[i].dept_name);
    }
    // console.log(deptArr);
  });
}
// GET Roles
function getRoles() {
  connection.query(`SELECT title FROM role`, function (err, roles) {
    if (err) throw err;
    roleArr = [];
    for (i = 0; i < roles.length; i++) {
      roleArr.push(roles[i].title);
    }
    // console.log(roleArr);
  });
}
// GET  managers by last_name
function getManagers() {
  connection.query(`SELECT employee.last_name FROM employee`, function (
    err,
    managers
  ) {
    if (err) throw err;
    emplArr = [];
    for (i = 0; i < managers.length; i++) {
      managerArr.push(managers[i].last_name);
    }
    // console.log(managerArr);
  });
}

// Adding Employees
function employee() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    connection.query("SELECT * FROM employee", function (err, res2) {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "first_name",
            type: "input",
            message: "Enter the employee's first name.",
          },
          {
            name: "last_name",
            type: "input",
            message: "Enter the employee's last name.",
          },
          {
            name: "roleEmp",
            type: "list",
            message: "Enter the employee's role.",
            choices: roleArr,
          },
          {
            name: "managerEmp",
            type: "list",
            message: "Enter this employee's Manager.",
            choices: managerArr,
          },
        ])
        .then(function (answer) {
          let roleID;
          for (let r = 0; r < res.length; r++) {
            if (res[r].title == answer.roleEmp) {
              roleID = res[r].role_id;
            }
          }
          let managerID;
          for (let m = 0; m < res2.length; m++) {
            if (res2[m].last_name == answer.managerEmp) {
              managerID = res2[m].employee_id;
            }
          }
          // when finished prompting, insert a new item into the db with that info
          connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answer.first_name,
              last_name: answer.last_name,
              role_id: roleID,
              manager_id: managerID,
            },
            function (err) {
              if (err) throw err;
            }
          );
          init();
        });
    });
  });
}
// Adding Role
function role() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Enter the role title.",
        },
        {
          name: "salary",
          type: "input",
          message: "Enter the salary for this role.",
          default: "0.00",
        },
        {
          name: "departmentName",
          type: "list",
          message: "Enter department this role is in.",
          choices: deptArr,
        },
      ])
      .then(function (answer) {
        
        let deptID;
        for (let d = 0; d < res.length; d++) {
          if (res[d].department_name == answer.departmentName) {
            deptID = res[d].department_id;
          }
        }
       
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: deptID,
          },
          function (err) {
            if (err) throw err;
          }
        );
        init();
      });
  });
}
// Adding Department
function department() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "Enter your department name?",
      },
    ])
    .then(function (answer) {
      
      connection.query(
        "INSERT INTO department SET ?",
        {
          department_name: answer.department,
        },
        function (err) {
          if (err) throw err;
        }
      );
      init();
    });
}
// View Employees by Department
function viewByDepartment() {
  connection.query(
    `SELECT employee.emp_id, employee.first_name, employee.last_name, department.dept_name FROM employee 
  LEFT JOIN role ON employee.role_id = role.role_id
  LEFT JOIN department ON role.dept_id = department.dept_id 
  ORDER BY department.dept_name`,
    function (err, data) {
      if (err) throw err;
      console.table(data);
      init();
    }
  );
}