// const functions = require("firebase-functions");
const functions = require("firebase-functions/v2");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const bodyParser = require("body-parser"); // neu hinzugefügt

const CLIENT_ID = "66160879575-u55r5usqoh2gq496ep7lkgud771ljedg.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04eUv7QBxl_I1CgYIARAAGAQSNwF-L9Ir5cz3a1yxhMzTJsTwWEhA61earsMNM_PsnGFMyC9w3K0iMoLeGLwmhiDqyyG1x4Bbdds";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const app = express();
// app.use(cors({ origin: true }));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());  // neu hinzugefügt

async function sendMail(to, subject, html) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "andrej.homann1990@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token
            }
        });

        const mailOptions = {
            from: "noreply@mywebsite.com",
            to,
            subject,
            html
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent:", result);
        return result;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}


// Endpunkt für sendemail
app.post("/sendemail/", async (req, res) => {
    try {
        
        const { email, name, message } = req.body;
        if (!email || !name || !message) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        console.log("Test data: name =", name, "email =", email, "message =", message);

        await sendMail("andrej.homann1990@gmail.com", `Contact from <${email}>`, `<p>From: ${name}</p><p>${message}</p>`);
        res.status(200).json({ success: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
});

// app.get("/", (req, res) => {
//   res.status(200).send("Function is up and running!");  // Hier kannst du auch eine andere Nachricht zurückgeben
// });

// Firebase Function mit dem Namen sendemail
exports.sendemail = functions.https.onRequest(app);




// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.options("/send-email", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "content-type");
//     res.sendStatus(204);
// });

// app.post("/send-email", async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
    
//     const { email, name, message } = req.body;
//     if (!email || !name || !message) {
//         return res.status(400).json({ error: "Missing required fields" });
//     }

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER, 
//           pass: process.env.EMAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: "noreply@mywebsite.com",
//         to: "andrej.homann1990@gmail.com",
//         subject: `Contact From <${email}>`,
//         html: `<p>From: ${name}</p><p>${message}</p>`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: "Email sent successfully" });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         res.status(500).json({ error: "Failed to send email" });
//     }
// });

// app.use((req, res) => {
//     res.status(405).set("Allow", "POST").send("Method Not Allowed");
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });













// const functions = require('@google-cloud/functions-framework');
// const { onRequest } = require("firebase-functions/v2");
// const functions = require("firebase-functions/v2/https");
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');
// const cors = require('cors')({origin: true});
// admin.initializeApp();
// require("dotenv").config();




// exports.sendemail = functions.onRequest((req, res) => {
//   cors(request, response, () => {
//     // Your Cloud Function logic here
//     response.status(200).send({ message: 'CORS enabled' });
//   });
// });



// var serviceAccount = require("./serviceAccountKey.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
// const express = require('express');
// const sendMail = express();

 

// sendMail.use(cors({origin:true}));

// sendMail.get('/sendMail', function (req, res) {
//     return res.status(200).send('mail sent');
// });



// const allowedOrigins = ['https://ah270690.web.app', 'https://andrej-homann.de'];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     methods: ['GET', 'POST', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true, 
// };

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER, 
//         pass: process.env.EMAIL_PASS
//     }
// });

// sendMail.use(cors(corsOptions));
// sendMail.use((req, res, next) => {
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
// });
  

// sendMail.options('*', cors(corsOptions));


// app.get('/', cors(corsOptions), function (request, response) {
// sendMail.get('/sendMail', function (request, response) {
//     const from = 'andrej.homann1990@gmail.com'; 
//     const {to, subject, text} = request.query;
//     const msg = {
//         to,
//         from,
//         subject,
//         text,
//         html: `<strong>${text}</strong>`,
//     };
//     transporter.sendMail(msg).then(() => {
//         response.status(200).send('Email sent');
//     }).catch((error) => {
//         response.status(500).send(error.toString());
//     });
// });

// exports.sendMail = onRequest((request, response) => {
//     return cors()(request, response, () => {
//       response.send("Hello from Firebase!");
//     });
//   });

// exports.sendMail = onRequest(
//     { cors: [/firebase\.com$/, "https://ah270690.web.app"] },
//     (request) => {
//       return "It works!";
//     }
// );

// exports.sendMail = onRequest((req, res) => {
//   // CORS-Middleware: Diese sorgt dafür, dass CORS-Header gesetzt werden
//   cors(req, res, () => {
//         if (req.method === 'OPTIONS') {

//         // Antwort auf die Preflight-Anfrage für CORS
//         res.set('Access-Control-Allow-Origin', ['https://ah270690.web.app', 'https://andrej-homann.de']);
//         res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//         res.set('Access-Control-Allow-Headers', 'Content-Type');
//         return res.status(200).send('');
//         }
//     })
// });

// const admin = require("firebase-admin");
// // const nodemailer = require("nodemailer");
// const express = require("express");
// // const cors = require("cors");
// const bodyParser = require("body-parser");

// // const functions = require("firebase-functions");

// // Importiere benötigte Module
// const functions = require('firebase-functions');
// // const cors = require('cors')({ origin: true });  // Erlaubt alle Ursprünge
// const cors = require('cors')({ origin: 'https://andrej-homann.de' });
// const nodemailer = require('nodemailer');

// // Deine Firebase Cloud Function für das Senden der E-Mail
// exports.sendMail = functions.https.onRequest((req, res) => {
//   // CORS-Middleware: Diese sorgt dafür, dass CORS-Header gesetzt werden
//   cors(req, res, () => {
//     if (req.method === 'OPTIONS') {
//       // Antwort auf die Preflight-Anfrage für CORS
//       res.set('Access-Control-Allow-Origin', '*');
//       res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//       res.set('Access-Control-Allow-Headers', 'Content-Type');
//       return res.status(200).send('');
//     }

//     if (req.method === 'POST') {
//       const { name, email, message } = req.body;

//       // Nodemailer Setup für das Senden der E-Mail
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL_USER, // In .env Datei speichern
//             pass: process.env.EMAIL_PASS,
//         },
//       });

//       let mailOptions = {
//             from: `Contact Form <noreply@mywebsite.com>`,
//             to: "andrej.homann1990@gmail.com",
//             subject: `Contact from ${name} <${email}>`,
//             html: `
//                 <p><strong>From:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Message:</strong></p>
//                 <p>${message}</p>
//             `,
//         };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           return res.status(500).send(error.toString());
//         }
//         res.status(200).send(info);
//       });
//     } else {
//       res.status(405).send('Method Not Allowed');
//     }
//   });
// });



// const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();
// const functions = require("firebase-functions");
// // const adminEmail = functions.gmail.email;
// // const adminPassword = functions.gmail.password;

// admin.initializeApp();

// const app = express();
// app.use(cors({
//     origin: 'https://andrej-homann.de', // Setze die URL deiner Website als erlaubte Quelle
//     methods: ['GET', 'POST'],          // Welche Methoden erlaubt sind
//     allowedHeaders: ['Content-Type']    // Welche Header erlaubt sind
// }));
// app.use(bodyParser.json());

// app.post("/sendMail", async (req, res) => {
//     const { name, email, message } = req.body;

//     // let transporter = nodemailer.createTransport({
//     //     service: "gmail",
//     //     auth: {
//     //         user: adminEmail, // In .env Datei speichern
//     //         pass: adminPassword,
//     //     },
//     // });

//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL_USER, // In .env Datei speichern
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     let mailOptions = {
//         from: `Contact Form <noreply@mywebsite.com>`,
//         to: "andrej.homann1990@gmail.com",
//         subject: `Contact from ${name} <${email}>`,
//         html: `
//             <p><strong>From:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//         `,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: "Mail sent successfully!" });
//     } catch (error) {
//         console.error("Error sending mail:", error);
//         res.status(500).json({ error: "Failed to send email" });
//     }
// });

// // Exportiere Express als Firebase Function:
// exports.api = functions.https.onRequest(app);