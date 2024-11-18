import asyncHandler from "express-async-handler";
import EventProvider from "../../models/eventprovider.model.js";
import jwt from "jsonwebtoken";

// @desc    Authenticate an event provider & get token
// @route   POST /api/eventProvider/login
// @access  Public
const loginEventProvider = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if event provider exists
  const eventProvider = await EventProvider.findOne({ email });

  if (!eventProvider) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Check if password matches
  const isMatch = await eventProvider.matchPassword(password);

  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.json({
    _id: eventProvider._id,
    name: eventProvider.name,
    email: eventProvider.email,
    company: eventProvider.company,
    contactnumber: eventProvider.contactnumber,
    token: generateToken(eventProvider._id),
  });
});

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export { loginEventProvider };
