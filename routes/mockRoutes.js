import express from "express";

const router = express.Router();


let mockDataset = [
  { id: 1, name: "Ansh Singh", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Akash Singh", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 1, name: "John doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
];


router.get("/dataset", (req, res) => {
  res.json({ success: true, data: mockDataset });
});


router.post("/add", (req, res) => {
  const newFace = req.body;
  newFace.id = mockDataset.length + 1;
  mockDataset.push(newFace);

  res.json({ success: true, message: "Added successfully", data: mockDataset });
});


let activityLogs = [];


router.post("/log", (req, res) => {
  const log = {
    id: activityLogs.length + 1,
    name: req.body.name,
    confidence: req.body.confidence,
    timestamp: req.body.timestamp,
  };

  activityLogs.unshift(log);
  res.json({ success: true, message: "Log saved", data: log });
});


router.get("/logs", (req, res) => {
  res.json({ success: true, data: activityLogs });
});


router.delete("/logs", (req, res) => {
  activityLogs = [];
  res.json({ success: true, message: "All logs cleared" });
});

export default router;
