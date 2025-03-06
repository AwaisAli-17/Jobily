import { Router } from "express";
import { getApplicationStats, getCurrentUser, updatedUser } from "../controllers/userController.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", getApplicationStats);
router.patch("/updated-user", updatedUser);

export default router;
