import { https } from "firebase-functions";
const authCred = require("authCred.json");
const mailer = require("nodemailer");
const cors = require("cors")({ origin: true });

export const sendEmail = https.onRequest((req, res) => {
  cors(req, res, () => {
    // console.log(req.body);
    mailer
      .createTransport({
        host: "smtp.mailgun.org",
        port: 465,
        secure: true,
        auth: authCred,
      })
      .sendMail({
        from: "personal@saigongidi.com", // sender address
        to: "website@saigongidi.com", // list of receivers
        subject: "Message from saigongidi.com", // Subject line
        html: `<p>Email: ${req.body.email}<p><br /><p>Message: ${req.body.message}</p>`, // html body
      })
      .then(() => {
        res.status(200).send("Success");
      })
      .catch((err: any) => {
        // console.log(err);
        res.status(500).send(err);
      });
  });
});
