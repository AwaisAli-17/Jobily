import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import jobRouter from "./routes/jobRouter.js";
import userRouter from "./routes/userRouter.js";

import e from "express";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/users", userRouter);
//Undefined Routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Job Not Found" });
});

//Global Error Handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong." });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server Connected on port ${port}`);
  });
} catch (e) {
  console.log(e);
  process.exit(1);
}
