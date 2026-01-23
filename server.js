import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import mockRoutes from "./routes/mockRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();


app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.options("*", cors());


app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/mock", mockRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/admin", adminRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error(" MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Server running on port ${PORT}`)
);
