const Product = require('./schemas');
const productRoutes = require('../src/routes')
const express=require('express');
const app = express();
const port=3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/WD17309', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Middleware để xử lý dữ liệu JSON
app.use(express.json());
app.use(productRoutes)
// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
