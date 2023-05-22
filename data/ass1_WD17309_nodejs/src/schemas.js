const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image:String,
    quanlity:Number,
    description:String,
  // Other fields
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
