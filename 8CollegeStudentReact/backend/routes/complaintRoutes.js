const express = require("express");
const { submitComplaint, getComplaints } = require("../controllers/complaintController");
const { protect } = require("../middleware/authMiddleware"); // Assuming JWT-based auth
const router = express.Router();

// Route to submit a complaint (Student)
router.post("/submit", protect, submitComplaint);

// Route to get all complaints (Admin)
router.get("/", protect, getComplaints);

module.exports = router;
