const db = require('../config/connection.js');

// This function handles UPDATE SQL queries for employee roles

// Function to update an employee's role in the database
function updateEmployeeRole(response) {
    // Update the role of the employee specified by the response
    db.query(`
    UPDATE employee SET role_id = ${response.updateRole} WHERE employee.id = ${response.updateEmployee}
    `, (err, res) => {
        // Handle any errors that occur during the database query
        if (err) throw err;
        // Log a success message to the console
        console.log('\u001b[36;1m', `Employee role updated!`);
        // After updating the employee role, trigger the next task
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

// Export the function to be used in other modules
module.exports = updateEmployeeRole;
