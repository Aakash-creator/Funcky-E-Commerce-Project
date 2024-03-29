const mongoose = require("mongoose");

const loginModel = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const addressSchema = new mongoose.Schema(
  {
    adresstype: {
      type: String,
      enum: ["home", "office", "home2", "other"],
      default: "home",
      required: true,
    },
    name: { type: String, trim: true },
    mobileno: { type: Number, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    pincode: { type: Number, trim: true },
  },
  { timestamps: true }
);

const registerModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    emailverified: { type: Boolean, default: false },
    password: { type: String, required: true },
    role: { type: String, enum: ["Admin", "User", "Owner"], default: "User" },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "address" },
    // cart:{}
  },
  { timestamps: true }
);

const address = mongoose.model("address", addressSchema);
const login = mongoose.model("login", loginModel);
const user = mongoose.model("user", registerModel);

module.exports = { login, user, address };
