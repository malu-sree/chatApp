// const express = require("express");
// const {
//   registerUser,
//   authUser,
//   allUsers,
// } = require("../controller/userController");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// router.route("/").get(protect, allUsers);
// router.route("/").post(registerUser);
// router.post("/login", authUser);

// module.exports = router;

const express = require('express');
const UserController = require('../controller/userController'); // Import the UserController
const { protect } = require('../middleware/authMiddleware'); 

const router = express.Router();

// POST route for signup
router.post('/signup', UserController.upload, UserController.signup);

// POST route for login
router.post('/login', UserController.login);

// Protected route
router.get('/search', protect, UserController.searchUsers);
router.get('/:id', protect, UserController.getUserById);

module.exports = router;
