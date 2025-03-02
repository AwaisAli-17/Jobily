import User from "../models/Users.js";
import { hashedPassword, comparePassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isAccountFirst = (await User.countDocuments()) === 0;
  const hash = await hashedPassword(req.body.password);
  req.body.password = hash;
  req.body.role = isAccountFirst ? "Admin" : "User";
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

export const login = async (req, res) => {
  const loginUser = await User.findOne({ email: req.body.email });
  if (!loginUser) {
    return res.status(404).json({ message: "Email or Password is incorrect." });
  }
  const matchUser = await comparePassword(req.body.password, loginUser.password);
  if (!matchUser) {
    return res.status(404).json({ message: "Email or Password is incorrect." });
  }
  const token = createJWT({ userId: loginUser._id, role: loginUser.role });
  return res.json({ token });
};
