import { adjectives,nouns } from "./words"
const mailgun = require("mailgun-js");
require("dotenv").config();
export const generateSecret = () =>{
    const randomNumber = Math.floor(Math.random()*adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}

export const sendMail = (email) => {
    const mg = mailgun({apiKey: process.env.API_PASSWORD, domain: process.env.DOMAIN});
    return mg.messages().send(email, function (error, body) {
        console.log(body);
    });

};

export const sendSecretMail = (address, secret)=> {
    const email = {
        from: "vlvksbdof12@gmail.com",
        to: address,
        subject: "Login Secret for Instagram Clone",
        html: `Hello! Your login secret it ${secret}.</br> Copy paste on the app/website to log in`
    }
    return sendMail(email);
}