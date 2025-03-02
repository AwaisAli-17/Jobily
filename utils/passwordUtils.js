import bcrypt from "bcryptjs";
export const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);
  return pass;
};

export const comparePassword = async (password, hashPass) => {
  const isMatch = await bcrypt.compare(password, hashPass);
  return isMatch;
};
