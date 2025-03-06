import Users from "../models/Users.js";
import Job from "../models/JobModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  return res.status(200).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  if (req.user.role === "Admin") {
    const users = await Users.countDocuments();
    const jobs = await Job.countDocuments();
    return res.status(200).json({ users, jobs });
  } else {
    return res.status(400).json("Unauthorized User");
  }
};

export const updatedUser = async (req, res) => {
  const updatedUser = await Users.findByIdAndUpdate(req.user.userId, req.body);
  return res.status(200).json({ message: "User Updated" });
};
