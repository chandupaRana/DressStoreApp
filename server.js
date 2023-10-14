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

// Routes
app.use('/api/products', require('./routes/product'));
app.use('/api/categories', require('./routes/category'));

app.get("/", (req, res) =>{
  res.send("Welcome to the DressStore Application")
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
