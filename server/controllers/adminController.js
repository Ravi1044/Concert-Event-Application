import { Admins } from "../models/model.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: "Username and password are required" });
    }
    const admin = await Admins.findByUsername(username);
    if (!admin || admin.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error during login" });
  }
};
