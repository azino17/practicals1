import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/complaints/all", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setComplaints(response.data);
      } catch (error) {
        alert("Error fetching complaints");
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div>
      <h2>All Complaints</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p>Submitted by: {complaint.submittedBy.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
