
// restaurant.js
const mongoose = require('mongoose');

// Define the restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  tag: String,
  available: Number,
  totalCapacity: Number,
  menu: [
    {
      mealName: String,
      price: Number,
      portion: String
    }
  ]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Function to seed database with sample data (run only once)
async function seedRestaurants() {
  // Clear all old restaurants
  await Restaurant.deleteMany({});

  const sampleData = [
    {
      name: "Alishan ",
      tag: "Verified Partner",
      available: 78,
      totalCapacity: 100,
      menu: [
        { mealName: "Daal Makhani", price: 120, portion: "Full" },
        { mealName: "Butter Roti (4 Pcs)", price: 60, portion: "Full" },
        { mealName: "Seasonal Vegetable Curry", price: 100, portion: "Full" }
      ]
    },
    {
      name: "Madheshwar Cafe",
      tag: "Popular Choice",
      available: 12,
      totalCapacity: 50,
      menu: [
        { mealName: "Katla Fish Curry", price: 220, portion: "Full" },
        { mealName: "Steamed Rice", price: 60, portion: "Full" },
        { mealName: "Small Salad", price: 40, portion: "Full" }
      ]
    },
    {
      name: "Terna Mess",
      tag: "New Provider",
      available: 0,
      totalCapacity: 75,
      menu: [
        { mealName: "Lemon-Garlic Lentils", price: 150, portion: "Full" },
        { mealName: "Pita Bread (2 Pcs)", price: 40, portion: "Full" },
        { mealName: "Tzatziki Dip", price: 50, portion: "Full" }
      ]
    },
    {
      name: "Tirupati Restaurant",
      tag: "Student Favourite",
      available: 35,
      totalCapacity: 80,
      menu: [
        { mealName: "Paneer Butter Masala", price: 180, portion: "Full" },
        { mealName: "Jeera Rice", price: 60, portion: "Full" }
      ]
    },
    {
      name: "Dwarka Restaurant",
      tag: "Healthy Meals",
      available: 42,
      totalCapacity: 100,
      menu: [
        { mealName: "Mixed Veg Curry", price: 110, portion: "Full" },
        { mealName: "2 Chapatis", price: 40, portion: "Full" },
        { mealName: "Dal Fry", price: 90, portion: "Full" }
      ]
    }
  ];

  await Restaurant.insertMany(sampleData);
  console.log('✅ Restaurants refreshed in database.');
}



module.exports = { Restaurant, seedRestaurants };

