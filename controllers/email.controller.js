const { email } = require("../utils");

const sendEmail = async (req, res) => {
  try {
    const response = await email.send(req.body);
    if (response.success) {
      res.status(200).json({
        message: "Email Sent Successfully",
        response: response.response, 
      });
    } else {
      res
        .status(400)
        .json({ message: " Email Sending Failed", error: response.error });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { sendEmail };
