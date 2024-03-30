const express = require("express");
const app = express();
require("dotenv").config();
require("./DBConnect");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { ShippingAddress } = require("./controller/user/AddAddress");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const user = require("./routes/user/User");
const { addAddress } = require("./controller/user/AddAddress");
app.use(user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/address", (req, res) => {
  res.send("Hello Address!");
});
app.post("/address", ShippingAddress);

app.get("*", (req, res) => {
  res.status(404).send("Resource you are finding is not available!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
