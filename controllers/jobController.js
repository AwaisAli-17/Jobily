import "express-async-errors";
import { nanoid } from "nanoid";
import Job from "../models/JobModel.js";

let jobs = [
  {
    id: nanoid(),
    company: "Apple",
    position: "Software Engineer",
  },
  {
    id: nanoid(),
    company: "Google",
    position: "Mobile Engineer",
  },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  return res.status(201).json({ job });
  //  let job = { id: nanoid(), company: req.body.company, job: req.body.position };
  //  jobs.push(job);
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  const jobs = await Job.findById(id);
  if (jobs) {
    return res.status(200).json(jobs);
  }
  return res.status(404).json({ message: "Job Not Found." });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  let job = await Job.findByIdAndUpdate(id, req.body, { new: true }); //ne: true to get updated Job
  if (!job) {
    return res.status(404).json({ message: "Job Not Found." });
  }
  return res.status(200).json({ updatedJob: job, message: "Job Updated Successfully." });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  let job = await Job.findByIdAndDelete(id);
  if (!job) {
    return res.status(404).json({ message: "Job Not Found." });
  }
  return res.status(200).json({ removedJob: job, message: "Job Deleted Successfully." });
};
