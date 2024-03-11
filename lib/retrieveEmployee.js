const db = require('../config/connection.js');

// This function is called in prompts.js to retrieve the current EMPLOYEE options

async function retrieveEmployee(response) {
    // Initialize variables to store employee list and returned value
    let employeeList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM employee
    `).then( (data) => {
        // Map the data retrieved from the database to create an array of employee objects
        employeeList = data[0].map(data => {
            return {
                name: data.first_name + ` ` + data.last_name,
                value: data.id
            }
        })
        // Add 'NONE' option to the employee list
        employeeList.push({name: 'NONE', value: 0});
        // Return the employee list
        return employeeList
    }).catch(err=>{
        // Log any errors that occur during the database query
        console.log(err);
    })
    // Return the retrieved value
    return returnedValue
};

// Export the retrieveEmployee function to be used in other modules
module.exports = retrieveEmployee;
