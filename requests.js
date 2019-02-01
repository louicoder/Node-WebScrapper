// THIS FILE IS RESPONSIBLE FOR RUNNING THE SERVER REQUESTS

const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

// class created for purposes of creating instances. But this as well can be ommitted and functions can be placed directly in this file and exported for use in other files.

// ====== TODO INCASE IT'S RELEVANT. ======
// class Requests {

// }
// ========================================

// function that handles making requests and returing HTML as a response to be used by other functions.
function scrapUrl (url) {
    request(url, (error, response, body) => {
        // const res = cheerio.load(response);
        console.log(response)
    })
}

// export the function to be used in other files.
module.exports = scrapUrl;

