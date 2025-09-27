const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
    },
    productRate: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;