const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    product_id: { type: String, required: true },
    rating: { tpye: Number, required: true },
    review_heading: { type: String, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    brand: String,
    name: String,
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: Number,
    taxesIncluded: Boolean,
    dutiesIncluded: Boolean,
    styleColors: [String], //add a enum here,
    sizesAvailable: [String], //add a enum here,
    description: String, //add a max words 300 limit here,
    productCode: String,
    netQuantity: { type: Number, required: trues },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const review = mongoose.model("Review", reviewSchema);
const product = mongoose.model("Product", productSchema);

module.exports = { product, review };
