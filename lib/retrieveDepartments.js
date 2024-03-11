const db = require('../config/connection.js');

// This function is called in prompts.js to retrieve the current DEPARTMENT options

async function retrieveDepartments(response) {
    // Initialize variables to store department list and returned value
    let departmentList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM department
    `).then( (data) => {
        // Map the data retrieved from the database to create an array of department objects
        departmentList = data[0].map(data => {
            return {
                name: data.name,
                value: data.id
            }
        })
        // Return the department list
        return departmentList
    }).catch(err=>{
        // Log any errors that occur during the database query
        console.log(err);
    })
    // Return the retrieved value
    return returnedValue
};

// Export the retrieveDepartments function to be used in other modules
module.exports = retrieveDepartments;
