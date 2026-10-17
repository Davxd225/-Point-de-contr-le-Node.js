
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yoanyokoli11@gmail.com',
    pass: 'pdew pbmw jdfz vdvd' // Mot de passe d'application Gmail
  }
});

const mailOptions = {
  from: 'yoanyokoli11@gmail.com',
  to: 'yoanyokoli11@gmail.com',
  subject: 'Test Node.js Nodemailer',
  text: 'Bonjour, ceci est un test envoyé depuis mon script Node.js !'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur lors de l'envoi :", error);
  } else {
    console.log('Email envoyé avec succès : ' + info.response);
  }
});