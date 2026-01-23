import User from "../models/User.js";


export const signupUser = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    const existingUser = await User.findOne({ phone });
    if (existingUser)
      return res.status(400).json({ success: false, message: "Phone already registered" });

    const newUser = new User({ name, phone, password });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Login controller
export const loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone, password });
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    res.json({ success: true, message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
