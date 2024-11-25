const Complaint = require("../models/Complaint");

// Submit a new complaint
exports.submitComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;
    const studentId = req.user.id; // Assuming JWT middleware sets req.user

    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    const complaint = new Complaint({
      title,
      description,
      studentId,
    });

    await complaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (error) {
    console.error("Error submitting complaint:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all complaints (for admin)
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate("studentId", "name email");
    res.status(200).json(complaints);
  } catch (error) {
    console.error("Error retrieving complaints:", error);
    res.status(500).json({ error: "Server error" });
  }
};
