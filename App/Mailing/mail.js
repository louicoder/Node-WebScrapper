const nodemailer = require("nodemailer");

// emailAddresses . They are constant for now, we can change this on demand
const emailAddresses = [
    {name: 'Louis', email: 'musanje2010@gmail.com'}, // objects of each user to recieve an email.
    {name: 'Louis', email: 'louicoder@gmail.com'}
];

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL, // the sender's email address
    pass: process.env.SENDER_PASSWORD // sender's email password.
  }
});

// function that sends the emails.
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

// export the function for use by other modules/files
module.exports = sendEmail;
