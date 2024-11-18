import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Create the schema for Event Provider
const eventProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  company: {
    type: String,
    required: true,
  },
  address: {
    type: String, // Example: business description
    required: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add the matchPassword method to the schema
eventProviderSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password before saving the event provider document
eventProviderSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Export the model as default
const EventProvider = mongoose.model("EventProvider", eventProviderSchema);

export default EventProvider;
