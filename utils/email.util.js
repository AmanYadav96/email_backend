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
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        table {
          font-family: Arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <h2>Sample Data Table</h2>
      <table>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Contact</th>
          <th>Interests</th>
          <th>Message</th>
        </tr>
        <tr>
          <td>${payload.fullName}</td>
          <td>${payload.email}</td>
          <td>${payload.country}</td>
          <td>${payload.phone}</td>
          <td>${payload.interests}</td>
          <td>${payload.message}</td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "awns@awns.in",
    subject: "Contact",
    text: "This is a plain text version of the email for non-HTML email clients.",
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return { success: true, response: info.response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

module.exports = { send };
