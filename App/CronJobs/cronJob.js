const cron = require("node-cron");
// const express = require("express"); // import is not necessary since we will not run the job in this file.
// const fs = require("fs"); // we shall use this file-system module at a later stage when needed.

const telNumbers = require('../Whatsapp/numbers');

// app = express(); we will not need this instance, it's already in server.js

// lets schedule the task through this function that can be exported to other modules/files.
// default timing is 10 seconds
const cronJob = () => cron.schedule("*/10 * * * * *", function () {
    // console.log("running a task every 10 seconds");
    sendMessage(telNumbers); // uncomment to send automated whtsapp messages here.
});

// DECSRIPTION OF THE CRON TIMING ARGUMENTS.
// --------------------------- second (optional)
// \    ---------------------- minute
// \    \   ------------------ hour
// \    \   \   -------------- day o month
// \    \   \   \   ---------- month
// \    \   \   \   \   ------ day of week
// \    \   \   \   \   \
// \    \   \   \   \   \
// *    *   *   *   *   *

// Example: if you need to run a task every second ==> "* * * * * *"
// Example: if you need to run a task every second ==> "20 * * * *" .note that seconds can be ommitted, thus no asterick.
// For more illustrations on usage of the library ==> https://www.npmjs.com/package/node-cron

// we do not need another instance of the app here.
// we already have an instance in the server.js file and we should use only that
// to avoid multiple entry points of the application.
// app.listen(3128); 

module.exports = cronJob;

