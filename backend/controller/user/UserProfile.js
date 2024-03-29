const { login, user } = require("../../models/AuthModel");
const JWT = require("jsonwebtoken");

const AddUserAddress = async (req, res) => {
  try {
    const { adresstype, name, mobileno, city, state, country, pincode } = req.body;

    const accesstoken = req.cookies.accesstoken;
    let userId; // Declare userId variable outside

    if (accesstoken) {
      try {
        const decoded = JWT.verify(accesstoken, process.env.JWTACCESSTOKENSECRET);
        userId = decoded.userId;
      } catch (err) {
        console.log(err);
        return res.status(401).json({ valid: false, message: "Invalid access token" });
      }
    }

    console.log(data); // Log the result of updateOne operation

    res.json(data); // Send response with the result
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" }); // Handle errors
  }
};

module.exports = { AddUserAddress };
