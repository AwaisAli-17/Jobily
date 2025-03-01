import User from "../models/Users.js";

export const register = async (req, res) => {
  const isAccountFirst = (await User.countDocuments()) === 0;
  req.body.role = isAccountFirst ? "Admin" : "User";
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

export const login = async (req, res) => {};
