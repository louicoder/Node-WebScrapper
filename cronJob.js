const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

// lets schedule task through a function that can be exportedd to other modules.
const cronJob = () => cron.schedule("20 * * * *", function () {
    console.log("running a task every 20 seconds");
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

app.listen(3128);

module.exports = cronJob;

