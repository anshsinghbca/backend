import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
 

  try {
    let { username, password } = req.body;

    
    username = username.trim();
    password = password.trim();

    
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    
    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }

   
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    return res.json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
