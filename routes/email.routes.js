const { emailController } = require("../controllers");

const router = require("express").Router();

router.post("/send-email", emailController.sendEmail);

module.exports = router;
