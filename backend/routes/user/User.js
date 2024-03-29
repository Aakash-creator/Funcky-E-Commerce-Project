const express = require("express");
const router = express.Router();

const auth = require("../Auth");
router.use(auth);

const profile = require("./Profile");
router.use(profile);

module.exports = router;
