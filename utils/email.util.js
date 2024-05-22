const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const send = async (payload) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: "awns@awns.in",
    subject: "Contact",
    text: JSON.stringify(payload),
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return error;
    } else {
      console.log("Email sent:", info.response);
      return info;
    }
  });
};

module.exports = { send };
