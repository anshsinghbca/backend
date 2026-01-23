import express from "express";
import { signupUser, loginUser } from "../controllers/authController.js";
import User from "../models/User.js";

const router = express.Router();


router.post("/signup", signupUser);
router.post("/login", loginUser);

router.post("/admin-create", async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    if (!name || !phone || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({
      name,
      phone,
      password,
      role: "user",
      createdBy: "admin",
    });

    await newUser.save();

    res.json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });

  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});


router.get("/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
