const db = require('../config/connection.js');

// These functions handle ADD SQL queries for departments, roles, and employees

// Function to add a new department to the database
function addDepartment(response) {
    // Insert a new department into the 'department' table
    db.query(`
    INSERT INTO department (name)
    VALUES
    ('${response.department}');
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Log a success message to the console
        console.log('\u001b[36;1m', `${response.department} department added!`);
        // After adding the department, trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Function to add a new role to the database
function addRole(response) {
    // Insert a new role into the 'role' table
    db.query(`
    INSERT INTO role (title, salary, department_id)
    VALUES
    ('${response.roleTitle}', '${response.roleSalary}', '${response.roleDepartment}')
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Log a success message to the console
        console.log('\u001b[36;1m', `${response.roleTitle} role added!`);
        // After adding the role, trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Function to add a new employee to the database
function addEmployee(response) {
    // Insert a new employee into the 'employee' table
    db.query(`
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES
    ('${response.employeeFirstName}', '${response.employeeLastName}', '${response.employeeRole}', '${response.employeeManager}' )
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Log a success message to the console
        console.log('\u001b[36;1m', `Employee ${response.employeeFirstName} ${response.employeeLastName} added!`);
        // After adding the employee, trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Export the functions to be used in other modules
module.exports = { addDepartment, addRole, addEmployee};
