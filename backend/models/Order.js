const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, required: true },
  productid: { type: String, required: true },
  payment_id: { type: String },
  quantity: { type: Number, required: true },
  totalprice: { type: Number, required: true },
  deliveryaddress: { type: String, required: true },
  return: {},
});
