const { address, user } = require("../../models/AuthModel");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");

const ShippingAddress = async (req, res) => {
  try {
    const { adresstype, name, mobileno, city, state, country, pincode } = req.body;

    const accesstoken = req.cookies.accesstoken;
    let userId;
    let useremail;

    JWT.verify(accesstoken, process.env.JWTACCESSTOKENSECRET, (err, decode) => {
      if (err) {
        console.log(err.message);
        res.json("INvalid login");
        return;
      } else {
        userId = decode.userId;
        useremail = decode.email;
        if (!userId) {
          res.json("User is not valid ");
        }
      }
    });

    const setAddress = await address.create({ adresstype, name, mobileno, city, state, country, pincode });

    // const add_id = new mongoose.Types.ObjectId(setAddress.id);
    const addressId = setAddress._id;

    // console.log("addressId:", addressId);
    // console.log("useremail:", useremail);

    await user.updateOne({ email: useremail }, { $set: { address: addressId } });

    // const doc_id = await setAddress._id;
    // console.log("Document id " + doc_id);

    // await user.updateOne({ email: useremail }, { $set: { address: add_id } });

    user
      .find({ email: useremail })
      .populate({ path: "address", model: "address" })
      .then((list) => {
        res.send(list);
      });

    // res.status(201).json({ message: "Address added successfully" });
  } catch (err) {
    console.log(err.message);
    res.json("error");
  }
};

module.exports = { ShippingAddress };
