const db = require('../config/connection.js');

// These functions handle VIEW SQL queries for departments, roles, and employees

// Function to view all departments
function viewDepartments() {
    // Query to select all departments
    db.query(`
    SELECT department.id AS department_id, department.name AS department_name FROM department;
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Display the result as a table in the console
        console.table(res);
        // Trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Function to view all roles
function viewRoles() {
    // Query to select all roles with their corresponding department names
    db.query(`
    SELECT role.title AS job_title, role.id AS role_id, department.name AS department, role.salary FROM role 
    INNER JOIN department ON role.department_id = department.id;
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Display the result as a table in the console
        console.table(res);
        // Trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Function to view all employees
function viewEmployees() {
    // Query to select all employees with their job titles, departments, salaries, and manager names
    db.query(`
    SELECT employee.id AS employee_id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, SPACE(1), manager.last_name) AS manager_name FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Display the result as a table in the console
        console.table(res);
        // Trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Export the functions to be used in other modules
module.exports = { viewDepartments, viewRoles, viewEmployees };
