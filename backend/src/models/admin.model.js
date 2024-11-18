import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Create the schema for Admin
const adminSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ["admin"], // Only 'admin' role for admins
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add the matchPassword method to the schema
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password before saving the admin document
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Export the model as default
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
