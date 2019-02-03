const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

// lets schedule task to be run on the server

cron.schedule("20 * * * *", function () {
    console.log("running a task every 20 seconds");
});

app.listen(3128);
