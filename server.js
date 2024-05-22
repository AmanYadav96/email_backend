const cors = require("cors");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { emailController } = require("./controllers");

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: `Index Route For Email Backend` });
});

app.post("/send-email", emailController.sendEmail);

module.exports = app;
