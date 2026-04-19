import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AppContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Doctors = () => {
  const { isAuthenticated } = useContext(Context);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("/api/v1/user/doctors", {
          withCredentials: true,
        });
        setDoctors(data.doctors);
      } catch (error) {
        console.log(error.response?.data?.message || "Failed to fetch doctors");
      }
    };
    if (isAuthenticated) fetchDoctors();
  }, [isAuthenticated]);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="page-header">
      <h2 className="page-title">Manage Doctors</h2>
      <div className="card-grid">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div className="stat-card" key={doctor._id} style={{ flexDirection: "column", gap: "10px", alignItems: "flex-start", position: "relative" }}>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <img 
                  src={doctor.docAvatar?.url || "/placeholder.jpg"} 
                  alt="Avatar" 
                  style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }} 
                />
                <div>
                  <h4 style={{ margin: "0" }}>Dr. {doctor.firstName} {doctor.lastName}</h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: "500" }}>{doctor.doctorDepartment}</span>
                </div>
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "10px", width: "100%", borderTop: "1px solid var(--border)", paddingTop: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <strong>Gender:</strong> <span>{doctor.gender}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <strong>Phone:</strong> <span>{doctor.phone}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <strong>Email:</strong> <span>{doctor.email}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <strong>DOB:</strong> <span>{new Date(doctor.dob).toLocaleDateString()}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong>NIC:</strong> <span>{doctor.nic}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </section>
  );
};

export default Doctors;
