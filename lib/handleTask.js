// Importing necessary functions from separate files
const { viewDepartments, viewRoles, viewEmployees } = require('./queryView.js');
const { addDepartment, addRole, addEmployee} = require('./queryAdd.js');
const updateEmployeeRole = require('./queryUpdate.js')
const { displayExitText } = require('./specialText.js');

// A reusable function to handle different tasks based on user response
function handleTask(response) {
    // Switch statement to determine which task to perform based on user response
    switch (response.task) {
        // If the user wants to view all departments, call the corresponding function
        case "View all departments":
            viewDepartments();
            break;
        // If the user wants to view all roles, call the corresponding function
        case "View all roles":
            viewRoles();
            break;
        // If the user wants to view all employees, call the corresponding function
        case "View all employees":
            viewEmployees();
            break;
        // If the user wants to add a department, call the corresponding function
        case "Add a department":
            addDepartment(response);
            break;
        // If the user wants to add a role, call the corresponding function
        case "Add a role":
            addRole(response);
            break;
        // If the user wants to add an employee, call the corresponding function
        case "Add an employee":
            addEmployee(response);
            break;
        // If the user wants to update an employee role, call the corresponding function
        case "Update an employee role":
            updateEmployeeRole(response);
            break;
        // If the user wants to exit the program, display exit text and exit the process
        case "EXIT":
            displayExitText();
            process.exit(0);
    }
};

// Exporting the handleTask function to be used in other modules
module.exports = handleTask;
