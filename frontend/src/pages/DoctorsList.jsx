import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturePages.css";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [department, setDepartment] = useState("All");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("/api/v1/user/doctors", { withCredentials: true });
        setDoctors(data.doctors);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors();
  }, []);

  const departments = ["All", ...new Set(doctors.map(doc => doc.doctorDepartment))];
  const filteredDoctors = department === "All" ? doctors : doctors.filter(doc => doc.doctorDepartment === department);

  // Predefined arrays of doctors in professional medical attire
  const maleDoctorImages = [
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1582750433449-648ed127d0f8?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&fit=crop&q=80&w=300&h=300"
  ];

  const femaleDoctorImages = [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300", 
    "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.unsplash.com/photo-1527613426496-e2a14b53faae?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300&h=300"
  ];

  const maleNames = [
    "James Smith", "Robert Johnson", "Michael Williams", "David Brown", 
    "Richard Jones", "Charles Garcia", "Joseph Miller", "Thomas Davis",
    "Christopher Wilson", "Matthew Anderson"
  ];

  const femaleNames = [
    "Mary Martinez", "Patricia Rodriguez", "Jennifer Lee", "Linda Hernandez", 
    "Elizabeth Gonzalez", "Barbara Moore", "Susan Taylor", "Jessica Wilson",
    "Sarah Martin", "Karen Thompson"
  ];

  // Helper to determine display gender (alternates for placeholders, ignores DB)
  const getDisplayGender = (doctor, index) => {
    return index % 2 === 0 ? "Male" : "Female";
  };

  // Helper function to assign realistic doctors in medical dress based on gender
  const getDoctorImage = (doctor, index) => {
    const isFemale = getDisplayGender(doctor, index) === "Female";
    const imageArray = isFemale ? femaleDoctorImages : maleDoctorImages;
    return imageArray[index % imageArray.length];
  };

  const getDoctorName = (doctor, index) => {
    const isFemale = getDisplayGender(doctor, index) === "Female";
    const nameArray = isFemale ? femaleNames : maleNames;
    return nameArray[index % nameArray.length];
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Find a Doctor</h1>
          <p>Book an appointment with ZeeCare Hospitals' expert doctors.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="filter-section">
          <h3>Filter by Speciality:</h3>
          <div className="filter-tags">
            {departments.map((dep, index) => (
              <button 
                key={index} 
                className={`filter-tag ${department === dep ? "active" : ""}`}
                onClick={() => setDepartment(dep)}
              >
                {dep}
              </button>
            ))}
          </div>
        </div>

        <div className="doctors-grid">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => {
              const displayGender = getDisplayGender(doctor, index);
              const displayFullName = getDoctorName(doctor, index);
              const fallbackImage = displayGender === "Female" 
                  ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" 
                  : "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300";

              return (
              <div key={index} className="doctor-card">
                <img src={getDoctorImage(doctor, index)} 
                     onError={(e) => {e.target.src = fallbackImage}}
                     alt={`Dr. ${displayFullName}`} className="doc-avatar" />
                <div className="doc-info">
                  <h4>Dr. {displayFullName}</h4>
                  <span className="doc-dept">{doctor.doctorDepartment}</span>
                  <div className="doc-details-extra" style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "15px", lineHeight: "1.6" }}>
                    <p style={{ margin: "4px 0" }}><strong>Gender:</strong> {displayGender}</p>
                    <p style={{ margin: "4px 0" }}><strong>Email:</strong> {doctor.email}</p>
                    <p style={{ margin: "4px 0" }}><strong>Phone:</strong> {doctor.phone}</p>
                  </div>
                  <div className="doc-actions">
                    <a href="/appointment" className="btn btn-primary" style={{ width: "100%", padding: "10px" }}>Book Appointment</a>
                  </div>
                </div>
              </div>
            )})
          ) : (
            <div style={{ textAlign: "center", gridColumn: "1 / -1", padding: "40px" }}>
              <p>No doctors found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
