import asyncHandler from "express-async-handler";
import EventProvider from "../../models/eventprovider.model.js";
import jwt from "jsonwebtoken";

// @desc    Register a new event provider
// @route   POST /api/eventProvider/register
// @access  Public
const registerEventProvider = asyncHandler(async (req, res) => {
  const { name, email, password, company, address, contactnumber } = req.body;

  // Check if user already exists
  const eventProviderExists = await EventProvider.findOne({ email });

  if (eventProviderExists) {
    res.status(400);
    throw new Error("Email already in use");
  }

  // Create new Event Provider
  const eventProvider = await EventProvider.create({
    name,
    email,
    password,
    company,
    address,
    contactnumber,
  });

  if (eventProvider) {
    res.status(201).json({
      _id: eventProvider._id,
      name: eventProvider.name,
      email: eventProvider.email,
      token: generateToken(eventProvider._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export { registerEventProvider };
