// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// const generateToken = require("../config/generateToken");

// //@description     Get or Search all users
// //@route           GET /api/user?search=
// //@access          Public
// const allUsers = asyncHandler(async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { name: { $regex: req.query.search, $options: "i" } },
//           { email: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
//   res.send(users);
// });

// //@description     Register new user
// //@route           POST /api/user/
// //@access          Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password, pic } = req.body;

//   if (!name || !email || !password) {
//     res.status(400);
//     throw new Error("Please Enter all the Feilds");
//   }

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     throw new Error("User already exists");
//   }

//   const user = await User.create({
//     name,
//     email,
//     password,
//     pic,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       pic: user.pic,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("User not found");
//   }
// });

// //@description     Auth the user
// //@route           POST /api/users/login
// //@access          Public
// const authUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       pic: user.pic,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid Email or Password");
//   }
// });

// module.exports = { allUsers, registerUser, authUser };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const User = require('../models/userModel');

// Set up Multer for file uploads (profile picture)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
  },
});

const upload = multer({ storage: storage });

// UserController Object
const UserController = {
  // Signup function
  async signup(req, res) {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = req.file ? req.file.path : null; // Save profile pic path if uploaded

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePic,
    });

    try {
      await newUser.save();
      res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Error creating user', error: err });
    }
  },

  // Login function
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User not found!' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password!' });
      }

      const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

      res.json({
        message: 'Login successful!',
        token,
        user: {
          username: user.username,
          email: user.email,
          profilePic: user.profilePic,
        },
      });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  },

  // Multer upload setup (middleware for handling photo uploads)
  upload: upload.single('profilePic'),
};

module.exports = UserController;
