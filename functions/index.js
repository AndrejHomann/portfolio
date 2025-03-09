const firebaseConfig = {
  apiKey: "AIzaSyBKLPRNMtx-jdfImoI_Y9Rq8Av4fk54bC0",
  authDomain: "ah270690.firebaseapp.com",
  projectId: "ah270690",
  storageBucket: "ah270690.firebasestorage.app",
  messagingSenderId: "66160879575",
  appId: "1:66160879575:web:6f9f310ecc133231870d92"
};

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const CLIENT_ID = "66160879575-u55r5usqoh2gq496ep7lkgud771ljedg.apps.googleusercontent.com";
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Main App
admin.initializeApp(firebaseConfig);
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database reference
const db = admin.firestore();

//function, that sends an email
async function sendMail(to, subject, text, html) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                type: "OAuth2",
                user: "andrej.homann1990@gmail.com",
                pass: process.env.EMAIL_PASS,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                // accessToken: accessToken
                accessToken: accessToken.token
            }
        });

        const mailOptions = {
            from: "andrej.homann1990@gmail.com",
            to: to,
            subject: subject,
            text: text,
            html: html
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
    console.log("Raw Request Body:", req.body);
    try {
        const email = req.body.email;
        const name = req.body.name;
        const message = req.body.message;
        console.log("Extracted Data:", { email, name, message });

        await sendMail(
            "andrej.homann1990@gmail.com", 
            `Neue Nachricht von ${name} <${email}>`,                                 // Betreff
            `Von: ${name} (${email})`,                                               // Klartext-Version
            `<p><strong>Von:</strong> ${name} (${email})</p><p>${message}</p>`       // HTML-Version
        );

        res.status(200).json({ success: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Firebase Function mit dem Namen sendemail
exports.sendemail = functions.https.onRequest(app);