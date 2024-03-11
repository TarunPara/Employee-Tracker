const db = require('../config/connection.js');

// This function is called in prompts.js to retrieve the current ROLE options

async function retrieveRole(response) {
    // Initialize variables to store role list and returned value
    let roleList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM role
    `).then( (data) => {
        // Map the data retrieved from the database to create an array of role objects
        roleList = data[0].map(data => {
            return {
                name: data.title,
                value: data.id
            }
        })
        // Return the role list
        return roleList
    }).catch(err=>{
        // Log any errors that occur during the database query
        console.log(err);
    })
    // Return the retrieved value
    return returnedValue
};

// Export the retrieveRole function to be used in other modules
module.exports = retrieveRole;
