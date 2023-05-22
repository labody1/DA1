const Product = require('./schemas');

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

// API endpoints
app.get('/products', (req, res) => {
  Product.find().then((products) => {
    res.json(products);
  }).catch((error) => {
    console.error('Error retrieving products', error);
    res.status(500).json({ error: 'Server error' });
  });
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });

  newProduct.save().then((product) => {
    res.json(product);
  }).catch((error) => {
    console.error('Error creating product', error);
    res.status(500).json({ error: 'Server error' });
  });
});

app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  Product.findByIdAndUpdate(productId, { name, price }, { new: true }).then((updatedProduct) => {
    res.json(updatedProduct);
  }).catch((error) => {
    console.error('Error updating product', error);
    res.status(500).json({ error: 'Server error' });
  });
});

app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;

  Product.findByIdAndRemove(productId).then((deletedProduct) => {
    res.json(deletedProduct);
  }).catch((error) => {
    console.error('Error deleting product', error);
    res.status(500).json({ error: 'Server error' });
  });
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
