import { https } from "firebase-functions";
import mailer from "nodemailer";
const cors = require("cors")({ origin: true });

// SMTP Credentials: {"user": "sender@email.com", "pass": "PASSWORD"}
import authCred from "./authCred.json";

const sendEmail = (destination: string, subject: string, html: string) => {
  return mailer
    .createTransport({
      host: "smtp.mailgun.org",
      port: 465,
      secure: true,
      auth: authCred,
    })
    .sendMail({
      from: authCred.user, // sender address
      to: destination, // receiver address
      subject: subject, // Subject line
      html: html, // html body
    });
};

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
      const subject = `${name} sent a message from ${destEmail.split("@")[1]}`;
      const body = `<p>Name: ${name}<br />Email: ${email}<br />Message: ${message}</p>`;

      sendEmail(destEmail, subject, body)
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

export const sendPlexForm = https.onRequest((req, res) => {
  cors(req, res, async () => {
    // console.log(req.body);
    const { name }: { name: string } = req.body;
    const { list }: 
      { list: { title: string; year: string; isShow: boolean }[] } = req.body;
    if (!name || !list) {
      res.status(400).send("Error: Must send a name and list!");
    } else {
      let items =  ``;
      list.forEach(item => {
        const itembody = `<ul>
                        <li><h2>Title:</h2> ${item.title}</li>
                        <li><h2>Year:</h2> ${item.year === "" ? "N/A" : item.year}</li>
                        <li><h2>TV Show?:</h2> ${item.isShow}</li>
                        </ul><br />`;
        items = items.concat(itembody);
      });

      const destination = "plex@saigongidi.com";
      const subject = `${name} has sent a request for Plex`;
      const body = `<p>
                    <h1>List:</h1><br /> 
                    ${items}
                  </p>`;

      sendEmail(destination, subject, body)
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

export const sendPlexSignup = https.onRequest((req, res) => {
  cors(req, res, async () => {
    // console.log(req.body);
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).send("Error: Must send a name and email!");
    } else {
      const destination = "plex@saigongidi.com";
      const subject = `${name} has sent a Plex signup request`;
      const body = `Email: ${email}`;
      sendEmail(destination, subject, body)
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
