const express = require('express')
const app = express()
// commandline import
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })
// cronjob imports
const cronJob = require('./App/CronJobs/cronJob');
// morgan for logging incoming server requests.
const morgan = require('morgan');
// webscrapper imports
const scrapUrl = require('./App/Scraping/scrapper')
// sending email imports
const sendEmail = require('./App/Mailing/mail');
// collaborator's numbers
const collaboratorsNumbers = require('./App/Whatsapp/numbers');

// whatsapp messenger
const sendMessage = require('./App/Whatsapp/whatsapp.js');

// port can be set with environmental variable or hardcoded here.
// however it's better set as an environmental variable.
// Place all environmental variables in that file. file is called nodemon.json
// the format is key-value pairs. remember keys must be enclosed with quotes as the standard json format not Javascript objects.
const port = process.env.PORT

// ====== SETUP ALL MIDDLEWARE HERE... =========
// we are using morgan in order to log our requets in the console. 
// it's a development package and should be pushed to production. 
// That's why I have added it in package.json as a devDependency.
app.use(morgan('dev'));

// START THE SERVER HERE.....
app.listen(port, () => {
    console.log(`App started, listening on port ${port}!\n-----------------------------------`);

    // scrapUrl is a method I have defined requests.js file and exported it here.
    // Once the server starts, its, called immediately.
    // The host below hosts movies
    // ============================
    // scrapUrl('http://dl8.heyserver.in/film/'); // comment if you don't need to use the scrapper.

    // run cronjobs from here
    // ======================
     cronJob(); // comment if you don't need to use the cronJob.

    // sending emails
    // ==============
    // sendEmail(); uncomment we you need to use it.

    // send whatsapp message from here.
    // ================================
    // sendMessage(collaboratorsNumbers) // uncomment when needed for use.


    // !!!! ALERT PLEASE READ. !!!
    // THE LINES BELOW ARE RESPONSIBLE FOR PICKING OUTPUT FROM THE STANDARD I/O (TERMINAL/CONSOLE).
    // THIS WILL BE USED AT LATER STAGES. THERE IS VERY GOOD USE FOR IT AWAITING
    // readline.question(`What's your name? `, (name) => {
    //     console.log(`Hi ${name}!`)
    //     readline.close()
    //   })
})