const sgMail = require('@sendgrid/mail')
const functions = require('firebase-functions')

const config = functions.config()
console.log(config)


let API_KEY = config.sendgrid.api_key;
let TO_EMAIL = config.form.email;

sgMail.setApiKey(API_KEY);

function sendEmail() {

    console.log('contactFormName')

    let userName = document.getElementById('contactFormName').value;
    let userEmail = document.getElementById('contactFormEmail').value;
    let userMessage = document.getElementById('contactFormMessage').value;

    let emailContent = (message) => `
    <h1>Mensaje de ${userEmail}</h1>
    <h2>Mensaje: ${message}</h2>
    `

    const message = {
      to: ['team@relier.cl'],
      from: {
        name: userName,
        email: userEmail
      },
      subject: 'Nuevo mensaje desde relier.cl',
      text: 'Test',
      html: emailContent(userMessage)
    };

    sgMail
      .send(message)
      .then((response) => console.log('Email sent..'))
      .catch((error) => console.log(error.message));
};