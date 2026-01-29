import Activity from "../models/Activity.js";

export const saveActivity = async (req, res) => {
  try {
    const { name, confidence, timestamp } = req.body;

    const activity = new Activity({
      name,
      confidence,
      timestamp,
    });

    await activity.save();

    res.json({ success: true, message: "Activity saved", data: activity });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getActivities = async (req, res) => {
  try {
    const logs = await Activity.find().sort({ createdAt: -1 });
    res.json({ success: true, data: logs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const clearActivities = async (req, res) => {
  try {
    await Activity.deleteMany({});
    res.json({ success: true, message: "All logs cleared" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getRecentActivities = async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 30);

    const logs = await Activity.find({
      createdAt: { $gte: sevenDaysAgo }
    }).sort({ createdAt: -1 });

    res.json({ success: true, data: logs });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
