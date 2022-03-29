import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ! REGISTERS A NEW USER
async function register(req, res, next) {
  try {
    const userAlreadyExists = await User.findOne({ eMail: req.body.eMail });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ message: "💔 The user already exists, please try again 🙏" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
    console.log("Wohoo 💫, Your new user has been created" + newUser);
  } catch (e) {
    next(e);
  }
}

export default {
  register,
};
