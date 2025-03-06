import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import e from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
//Undefined Routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route Not Found" });
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
