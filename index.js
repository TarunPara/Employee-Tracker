const db = require('./config/connection.js');
const { displayTitleText } = require('./lib/specialText.js');
const selectTask = require('./lib/selectTask.js');

/**
 * Attempts to connect to the database and initializes the application.
 * If the database connection is unsuccessful, it throws an error.
 * On a successful connection, it proceeds to initialize the application.
 */
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process with an error code
    }
    console.log('Successfully connected to the database.');
    init(); // Start the main process of the application
});

/**
 * The main function of the application.
 * It first displays the application's title, then calls a function to display
 * the main task selection menu to the user.
 */
function init() {
    displayTitleText(); // Show the application's title in special formatting
    selectTask();       // Present the main task list prompt to the user
};
