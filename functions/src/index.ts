import { https } from "firebase-functions";
import mailer from "nodemailer";
const cors = require("cors")({ origin: true });

// SMTP Credentials: {"user": "sender@email.com", "pass": "PASSWORD"}
import authCred from "./authCred.json";

// API function to send an email with info from contact form
// Request body must include name, email, message, and destination email
export const sendFormEmail = https.onRequest((req, res) => {
  cors(req, res, async () => {
    // console.log(req.body);
    const { name, email, message, destEmail } = req.body;
    if (!name || !email || !message || !destEmail) {
      res.status(400)
        .send("Error: Must send a name, email, message, and destination email!");
    } else {
      mailer
        .createTransport({
          host: "smtp.mailgun.org",
          port: 465,
          secure: true,
          auth: authCred,
        })
        .sendMail({
          from: `${authCred.user}`, // sender address
          to: `${destEmail}`, // receiver address
          subject: `${name} sent a message from ${destEmail.split("@")[1]}`, // Subject line
          html: `<p>Name: ${name}<br />Email: ${email}<br />Message: ${message}</p>`, // html body
        })
        .then(() => {
          res.status(200).send("Success");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
    return;
  });
});