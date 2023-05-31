const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:
    {type:Number},
    name:
    {type:String},
    price:
    {type:Number},
    image:
    {type:String},
    quanlity:
    {type:Number},
    description:
    {type:String},
  // Other fields
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
