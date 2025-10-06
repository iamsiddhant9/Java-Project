
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Restaurant, seedRestaurants } = require('./restaurant');

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
const uri = 'mongodb://127.0.0.1:27017/CampusCravings';

// ⬆️ Change this to your MongoDB Atlas URI if using cloud
// Example for Atlas: 
// const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/campusCravings';

mongoose.connect(uri)
  .then(() => {
    console.log('Well Done Siddhant You Connected to MongoDB');
    seedRestaurants(); // Seed data if empty
  })
  .catch(err => console.error('MongoDB connection error:', err));

// 📡 API route to get all restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant data' });
  }
});

// Run the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

