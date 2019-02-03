const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

// lets schedule task to be run on the server

cron.schedule("* * * * *", function () {
    console.log("running a task every minute");
});

app.listen(3128);