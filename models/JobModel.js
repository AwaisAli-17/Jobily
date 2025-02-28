import mongoose, { mongo } from "mongoose";

const JobSchema = mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["Interviewed", "Declined", "Pending"],
      default: "Pending",
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship"],
      default: "Full-time",
    },
    jobLocation: {
      type: String,
      default: "MyCity",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Job", JobSchema);
