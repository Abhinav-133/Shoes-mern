const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Orders = require("../models/Orders");

// Create order route
router.post("/createOrder", async (req, res) => {
  try {
    const { email, data, date } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: "User not found" });
    }

    // Create a new order
    const newOrder = new Orders({
      Email: email,
      Orders: data,
      Date: date,
    });
    await newOrder.save();

    // Add order to user's orders array
    user.orders.push(newOrder._id);
    await user.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
