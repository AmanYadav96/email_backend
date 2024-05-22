const { email } = require("../utils");

const sendEmail = async (req, res) => {
  try {
    const response = await email.send(req.body);
    if (response) {
      console.log(response);
    }
    res.status(200).json({ message: "Email Sent Success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { sendEmail };
