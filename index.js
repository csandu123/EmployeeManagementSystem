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

        