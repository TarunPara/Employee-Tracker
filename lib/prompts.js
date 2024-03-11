// Importing functions to retrieve data
const retrieveDepartments = require('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retrieveEmployee = require('./retrieveEmployee');

// Inquirer prompts
const prompts = [
    // Task selection prompt
    { name: 'task', type: 'list', message: 'SELECT TASK:', choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT'] },
    // Prompt for adding a department
    { name: "department", type: "input", message: "ENTER NEW DEPARTMENT NAME:", when: (response) => response.task === 'Add a department', validate: (response) => response === "" ? console.log('\u001b[31m', '\n Try again') : true },
    // Prompts for adding a role
    { name: "roleTitle", type: "input", message: "ENTER NEW ROLE TITLE:", when: (response) => response.task === 'Add a role', validate: (response) => response === "" ? console.log('\u001b[31m', '\n Try again') : true },
    { name: "roleSalary", type: "input", message: "ENTER ROLE SALARY:", when: (response) => response.task === 'Add a role', validate: (response) => response === "" ? console.log('\u001b[31m', '\n Try again') : true },
    { name: "roleDepartment", type: "list", message: "SELECT ROLE DEPARTMENT:", choices: retrieveDepartments, when: (response) => response.task === 'Add a role' },
    // Prompts for adding an employee
    { name: "employeeFirstName", type: "input", message: "ENTER FIRST NAME:", when: (response) => response.task === 'Add an employee', validate: (response) => response === "" ? console.log('\u001b[31m', '\n Try again') : true },
    { name: "employeeLastName", type: "input", message: "ENTER LAST NAME:", when: (response) => response.task === 'Add an employee', validate: (response) => response === "" ? console.log('\u001b[31m', '\n Try again') : true },
    { name: "employeeRole", type: "list", message: "SELECT EMPLOYEE ROLE:", choices: retrieveRole, when: (response) => response.task === 'Add an employee' },
    { name: "employeeManager", type: "list", message: "SELECT EMPLOYEE MANAGER:", choices: retrieveEmployee, when: (response) => response.task === 'Add an employee' },
    // Prompts for updating an employee role
    { name: "updateEmployee", type: "list", message: "SELECT EMPLOYEE:", choices: retrieveEmployee, when: (response) => response.task === 'Update an employee role' },
    { name: "updateRole", type: "list", message: "SELECT NEW ROLE:", choices: retrieveRole, when: (response) => response.task === 'Update an employee role' }
];

module.exports = prompts;
