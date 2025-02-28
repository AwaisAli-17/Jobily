import { Router } from "express";
import {
  getAllJobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

const router = Router();

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:id", getJobById);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
