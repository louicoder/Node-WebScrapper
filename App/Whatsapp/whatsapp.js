const accountSid = process.env.TWILIO_SID; // AccountSID from twilio configured as  SID entry in nodemon.js
const authToken = process.env.TWILIO_TOKEN; // token from Twilio configured as TOKEN entry in nodemon.js
const client = require('twilio')(accountSid, authToken);
// const telNumbers = ["+256704506345"]//, "+2349052630413", "+256704740595"] // these  numbers belong to the collaborators.
const whatsappNumbers = require('./numbers')

// function that handles sending of the whatsapp messages
function sendMessage(numbers) {
    function sendWhatsappMessage(whatsappNumbers) {

        // to handle multiple numbers we need to create this loop below
        // sending a message to each number.
        whatsappNumbers.forEach(num => {
            // send message
            client.messages
                .create({
                    // body should be the message you are sending. you can insert anything you feel like
                    body: `Hello, this is an automated whatsapp message from Node webscrapper project. This message proves that the app is working fine`,
                    // for now we are using the twilio sandbox untill production then it can be changed
                    from: `whatsapp:${process.env.SANDBOX_WHATSAPP_NUMBER}`,
                    // THIS NUMBER IS KEPT AS AN ENVIRONMENTAL VARIABLE IN THE nodemon.json file, key is number
                    to: `whatsapp:${num}`
                })
                // resolve
                .then(message => {
                    // message was sent successsfully
                    console.log(message._solution)
                })
                .catch(error => {
                    // an error occured and message was not sent
                    console.log(`An error occured ${error}`)
                })
                .done();
        })
    }

    // let's export the function here.
module.exports = sendWhatsappMessage;

