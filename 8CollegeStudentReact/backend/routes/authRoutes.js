const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

// Define routes
router.post("/register", register); // Ensure 'register' is imported correctly
router.post("/login", login);

module.exports = router;
