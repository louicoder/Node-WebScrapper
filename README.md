### Node-WebScrapper
---
> _A web scrapper that scraps websites and performs a couple of automated tasks._

The scrapper will be used to collect analytics data from a web source like a website/web application. Some of the test sources will include Facebook profiles, pages and groups,foreign exchange sites, weather websites, movies sites, . The end goal is to be able to automate activities on the web using NodeJS.

We look forward to using this idea to be able to gather online analytics from different websites and be able to use that data in a way that can benefit or solve a problem. 

#### Installing dependencies
---
run `npm install` or simply `npm i` to install dependencies for the application.

#### CronJobs:
---
We automate a few tasks like sending emails, SMSs and whatsapp messages using this particualr feature. To start using the cron-job function, simply import the function you want to be executed into the croJob.js file and execute within the cronJob function

```
const cronJob = () => cron.schedule("*/10 * * * * *", function () {
    // console.log("running a task every 10 seconds");
    sendMessage(telNumbers); // uncomment to send automated whtsapp messages here.
});

Example:
========
0 8 * * * every day at 8am
0 0 * * 0 every 7 days (at 00:00 on Sunday)
*/3 * * * * every 3rd minute
0 0 1 */2 * every other month (at 00:00 on the first day of month, every 2nd month)

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
```
#### Whatsapp:
---
The implementation is in a development phase but can be tested out with the following guidelines below.
- Add the number `+14155238886` in your contacts
- Send the key word `join managed-busy.` to the number up to activate the sandbox
- You should get a confirmation from the contact confirming sandbox addition/activation
- In the ./Whatsapp/whatsapp.js file is where the magic happens. The file contains the function that executes sending of whatsapp messages. 

```
// function that handles sending of the whatsapp messages
function sendMessage (whatsappNumbers) {

    // to handle multiple numbers we need to create this loop below
    // sending a message to each number.
    whatsappNumbers.forEach(num => {
        // send message
        client.messages
            .create({
                // body should be the message you are sending. you can insert anything you feel like
                body: `Hello, this is an automated whatsapp message from Node webscrapper project`,
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
```

#### Emails:
Emails are a way of creating redundancy for communication in our application. When errors happen in any of our application processes, we use this feature to communicate to all listed emails about the error that happened and stating what went wrong in the message body. To be able to receive emails or to test out this feature add your email to the email constant in the `./App/Mailing/mail.js` file.

```
// Each object in the array represents a user that wil receive the email. 
// Remove those you do not want to receieve the emails.

const emailAddresses = [
    {name: 'your_name_here', email: 'your_email_here'},
    {name: 'testUsername', email: 'test@test.com'}
];

// Function that sends the emails.
function sendEmail() {
  // lets loop through all the email addresses that we need to send emails to
  
    emailAddresses.forEach(address => {
        // sender is the sender of email, addresses are the email addresses to send to
        let mailOptions = {
            from: process.env.SENDER_EMAIL, // sender's email address
            to: address.email, // list of receivers email addresses
            subject: "Node Webscrapper mail automation", // Subject line of email
            html: `<p>Hello <strong>${address.name}</strong> <hr/> <br/><br/>This is an automated test email for the nodeJS project!!!</p>` // plain text body or html
        };

        // let's send the email now.
        sender.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err); // check if there was any error
            else
                console.log(info); // there wasn't any error hence successful
        });
    });
}
```
 
#### Instructions
---
Instructions about the project can be found in the `instructions.js` file. Here you will find all the instruction about contributing to the project as well as the project work-flow.

#### Collaborators/Contributors:
---

| Author        | Github handle | Twitter handle |
| ------------- |:-------------|:--------------|
| Louis Musanje Michael     | [louicoder](https://github.com/louicoder)| [louiCoder](https://twitter.com/louicoder) |


| Collaborators      | Github handle      | Twitter handle | 
| ------------- |:-------------|:------------ |
| Kenneth Okenwa | [Anekenonso](github.com/Anekenonso)| [Anekenonso1](twitter.com/Anekenonso1)
