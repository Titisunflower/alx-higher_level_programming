#!/usr/bin/node
// Import required modules
const request = require('request');

// Function to compute the number of completed tasks by user id
function countCompletedTasks(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      const todos = JSON.parse(body);
      const completedTasksByUser = {};

      // Count completed tasks for each user
      todos.forEach((todo) => {
        if (todo.completed) {
          if (completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId]++;
          } else {
            completedTasksByUser[todo.userId] = 1;
          }
        }
      });

      // Print the results
      console.log(completedTasksByUser);
    }
  });
}

// Main function to run the script
function main() {
  if (process.argv.length !== 3) {
    console.error('Usage: node 6-completed_tasks.js <API_URL>');
    process.exit(1);
  }

  const apiUrl = process.argv[2];
  countCompletedTasks(apiUrl);
}

// Call the main function
main();
