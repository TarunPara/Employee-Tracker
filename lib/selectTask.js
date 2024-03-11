const inquirer = require('inquirer');
const prompts = require('./prompts.js');
const handleTask = require('./handleTask.js');

// This function presents a prompt list after completing each task
// It asks for user input, sends the response to the task handler, and handles errors

function selectTask() {
    // Ask the user for input based on the prompts
    inquirer
    .prompt(prompts)
    .then((response => {
        // Send the user response to the task handler
        handleTask(response);
    }))
    .catch(err => {
        // Log any errors that occur during the prompt
        console.log(err);
    });
};

// Export the selectTask function to be used in other modules
module.exports = selectTask;
