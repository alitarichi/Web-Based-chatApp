import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        erorr: "Passwords do not match",
      });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ erorr: "User already exists" });
    }

    //  HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // https://avatar-placeholder.iran.liara.run

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?usrname=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?usrname=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate JWT token here
      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullname: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ erorr: "Invalid user data" });
    }
  } catch (error) {
    console.log("Erorr in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Erorr" });
  }
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
