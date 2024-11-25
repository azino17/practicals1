import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!complaint.title || !complaint.description) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/complaints/submit",
        complaint,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(response.data.message || "Complaint submitted successfully");
      setComplaint({ title: "", description: "" }); // Reset the form
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert(
        error.response?.data?.error || "An error occurred while submitting the complaint"
      );
    }
  };

  return (
    <div style={{ margin: "20px auto", maxWidth: "500px", textAlign: "center" }}>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          value={complaint.title}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <textarea
          name="description"
          placeholder="Complaint Description"
          value={complaint.description}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        ></textarea>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
