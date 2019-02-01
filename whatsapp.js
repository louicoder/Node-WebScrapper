const accountSid = process.env.SID; // AccountSID from twilio configured as  SID entry in nodemon.js
const authToken = process.env.TOKEN; // token from Twilio configured as TOKEN entry in nodemon.js
const client = require('twilio')(accountSid, authToken);
const telNumbers = ["+256704506345", "+2349052630413"] // these two numbers belong to the collaborators louis and kenneth

// function that handles sending of the whatsapp messages
function sendMessage (numbers) {

    // to handle multiple numbers we need to create this loop below
    // sending a message to each number.
    numbers.forEach(num => {
        // send message
        client.messages
            .create({
                // body should be the message you are sending
                body: `Hello there`,
                // for now we are using the twilio sandbox untill production then it can be changed
                from: `whatsapp:+14155238886`,
                // THIS NUMBER IS KEPT AS AN ENVIRONMENTAL VARIABLE IN THE nodemon.json file, key is number
                to: `whatsapp:${num}`
            })
            // resolve
            .then(message => {
                //   message was sent successsfully
                console.log(message._solution)
            })
            .catch(error => {
                // an error occured and message was not sent
                console.log(`An error occured ${error}`)
            })
            .done();
    })
}

// let's execute the function here.
sendMessage(telNumbers)