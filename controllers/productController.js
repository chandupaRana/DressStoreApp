const Product = require('../models/product');

// GET: Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET: Get product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST: Add a new product
const addProduct = async (req, res) => {
  const { name, description, price, published, category } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
    published,
    category,
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// PUT: Update product by ID
const updateProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(updatedProduct);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// DELETE: Remove product by ID
const removeProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const removedProduct = await Product.findByIdAndRemove(id);
    if (!removedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(removedProduct);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  removeProductById,
};
