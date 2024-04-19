// productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../modal/Product');

// Create product route
router.post('/', async (req, res) => {
  try {
    const { title, description, price, category, image, owner } = req.body;
    const newProduct = new Product({ title, description, price, category, image, owner });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Error creating product' });
  }
});

// Update product route (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, category, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, { title, description, price, category, image }, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Error updating product' });
  }
});

// Get product route
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Error fetching product' });
  }
});

// Delete product route
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Error deleting product' });
  }
});

module.exports = router;
