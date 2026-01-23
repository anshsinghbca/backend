import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  confidence: { type: Number, required: true },
  timestamp: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.model("Activity", activitySchema);
