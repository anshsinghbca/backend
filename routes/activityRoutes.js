import express from "express";
import { 
  saveActivity, 
  getActivities, 
  clearActivities,
  getRecentActivities
} from "../controllers/activityController.js";

const router = express.Router();

router.get("/logs", getActivities);
router.post("/log", saveActivity);
router.delete("/logs", clearActivities);


router.get("/recent", getRecentActivities);

export default router;
