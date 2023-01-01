const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const choiceOptions = ["View all employees", "View all departments", "View all roles", "Update role", "Add department", "Add employee", "Remove employee", "Exit"]

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Cosmin1323',
    database: 'employeeTracker_db',
});

console.log(`Welcome to the Employee Tracker! What would you like to do?`);

const start = () => {
    inquirer.prompt(
        {
            name: "optionChoices",
            type: 'list',
            message: "How would you like to proceed?",
            choices: choiceOptions

        }).then(answer => {
            switch (answer.optionChoices){
                case "View all employees":
                 viewEmployees();
                 break;
                case "View all departments":
                 viewDepartment();
                 break;
                case "View all roles":
                 viewRoles();
                 break;
                 case "Update role":
                 updateRole();
                 break;
                case "Add department":
                 addDepartment();
                 break;
                case "Add employee":
                 addEmployee();
                 break;
                 case "Remove employee":
                 removeEmployee();
                 break;
                case "Exit":
                    console.log("Thank you for using the Employee Management System");
                    connection.end();
                 break;
                
                };   
            });
        };

         // function to view employees
         const viewEmployees = () => {
            connection.query (`SELECT e.id, e.first_name AS "First Name", e.last_name AS "Last Name", r.title, d.department_name AS "Department", IFNULL(r.salary, 'No Data') AS "Salary", CONCAT(m.first_name," ",m.last_name) AS "Manager"
            FROM employees e LEFT JOIN roles r ON r.id = e.role_id LEFT JOIN departments d ON d.id = r.department_id
            LEFT JOIN employees m ON m.id = e.manager_id ORDER BY e.id;`, (err, res) => {
                if (err) throw err;
                console.table("All Employees", res);
                start();
            });
        };

        // function to view departments
        const viewDepartment = () => {
            connection.query(`SELECT * FROM departments`, (err, res) => {
                if (err) throw err;
                console.table("All Departments", res);
                start();
            });
        };

        // function to view roles
        const viewRoles = () => {
            connection.query(`SELECT * FROM roles`, (err, res) => {
                if (err) throw err;
                console.table("All Roles", res);
                start();
            });
        };

         