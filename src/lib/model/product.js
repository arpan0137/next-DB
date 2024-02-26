import mongoose, { Schema } from "mongoose";

const productModel = new Schema({
    name: String,
    brand: String,
    price: Number,
    colour: String,
    category: String
});

export const Product = mongoose.models.productlist || mongoose.model("productlist", productModel)
