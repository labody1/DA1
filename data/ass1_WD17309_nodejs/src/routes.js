const express = require('express')
const Product = require('../src/schemas');
const app=express();
// thêm sản phẩm
app.post('/product',async (req,res)=>{
  const u =new Product(req.body)
    try {
      await u.save()
      res.send(u)
      console.log("Thêm sản phẩm thành công");
    } catch (error) {
    res.status(500).send(error.message)
    }
})
//lấy sản phẩm
app.get('/products',async (req,res)=>{
  const product =await Product.find({})
    try {
      res.send(product)
    } catch (error) {
    res.status(500).send(error.message)
    }
})
//update sản phẩm
app.patch('/product/:id',async(req, res)=>{
  try {
    const product = await Product.findByIdAndUpdate(req.params.id,req.body)
    res.send(product)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
//delete sản phẩm
app.delete('/product/:id',async(req, res)=>{
  try {
    const product = await Product.findByIdAndDelete(req.params.id,req.body)
    if(!product) res.status(404).send("Sản phẩm không tồn tại")
    res.status(200).send(`Xóa sản phẩm có id ${req.params.id} thành công`)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
//delete sản phẩm theo trường dữ liệu
app.delete('/products/:id',async(req, res)=>{
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if(!product) res.status(404).send("Sản phẩm không tồn tại")
    res.status(200).send(`Xóa sản phẩm có id ${req.params.id} thành công`)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
module.exports = app
