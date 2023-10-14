const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://chandupanr03:Mattegoda11@cluster0.rkikrwh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define your routes
app.use('/api/products', require('./routes/product'));
app.use('/api/categories', require('./routes/category'));

app.get("/", (req, res) =>{
  res.send("Welcome to the DressStore Application")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
