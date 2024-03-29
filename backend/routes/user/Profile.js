const express = require("express");
const router = express.Router();
const { AddUserAddress } = require("../../controller/user/UserProfile");
const { isUserValid } = require("../../controller/AuthCtrlr");

router.use(isUserValid);

router.get("/profile", (req, res) => {
  res.json("Welcome to profile");
});

router.get("/profile/address", (req, res) => {
  res.json("Welcome to profile address");
});
router.get("/profile/carts");

module.exports = router;
