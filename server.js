const express = require('express')
const app = express()
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

// 
const morgan = require('morgan');
const scrapUrl = require('./requests')

// port can be set with environmental variable or hardcoded here.
// however it's better set as an environmental variable.
// Place all environmental variables in that file. file is called nodemon.json
// the format is key-value pairs. remember keys must be enclosed with quotes as the standard json format not Javascript objects.
const port = process.env.PORT

// ====== SETUP ALL MIDDLEWARE HERE... =========
// we are using morgan in order to log our requets in the console. 
// it's a development package and should be pushed to production. 
// That's why I have added it in package.json as a devDependency.
app.use(morgan('dev'))

// START THE SERVER HERE.....
app.listen(port, () => {
    console.log(`App started, listening on port ${port}!\n-----------------------------------`);

    // scrapUrl is a method I have defined requests.js file and exported it here.
    // Once the server starts, its, called immediately.
    // The host below hosts movies
    scrapUrl('http://dl8.heyserver.in/film/');

    // !!!! ALERT PLEASE READ. !!!
    // THE LINES BELOW ARE RESPONSIBLE FOR PICKING OUTPUT FROM THE STANDARD I/O (TERMINAL/CONSOLE).
    // THIS WILL BE USED AT LATER STAGES. THERE IS VERY GOOD USE FOR IT AWAITING
    // readline.question(`What's your name? `, (name) => {
    //     console.log(`Hi ${name}!`)
    //     readline.close()
    //   })
})