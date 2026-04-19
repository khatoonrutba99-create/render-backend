import React from "react";
import "./Departments.css";

const Departments = () => {
  const departmentsArray = [
    { name: "Pediatrics", icon: "/icons/pediatrics.svg", emoji: "👶" },
    { name: "Orthopaedics", icon: "/icons/orthopedics.svg", emoji: "🦴" },
    { name: "Cardiology", icon: "/icons/cardiology.svg", emoji: "❤️" },
    { name: "Neurology", icon: "/icons/neurology.svg", emoji: "🧠" },
    { name: "Oncology", icon: "/icons/oncology.svg", emoji: "🎗️" },
    { name: "Radiology", icon: "/icons/radiology.svg", emoji: "🩻" },
    { name: "Physical Therapy", icon: "/icons/therapy.svg", emoji: "🏃" },
    { name: "Dermatology", icon: "/icons/dermatology.svg", emoji: "✨" },
    { name: "Gastroenterology", icon: "/icons/gastro.svg", emoji: "⚕️" },
    { name: "Nephrology", icon: "/icons/nephro.svg", emoji: "🩸" },
  ];

  return (
    <section className="excellence-section">
      <div className="container" style={{ padding: "80px 20px" }}>
        <h2 className="section-title">Centre of Excellence</h2>
        <p className="section-subtitle">Delivering world-class healthcare with specialized, multi-disciplinary teams</p>
        
        <div className="excellence-grid">
          {departmentsArray.map((depart, index) => (
            <div key={index} className="dept-card">
              <div className="dept-icon">
                {/* Fallback to emoji if SVG isn't present for quick visual */}
                <span style={{fontSize: "2.5rem"}}>{depart.emoji}</span>
              </div>
              <h3 className="dept-name">{depart.name}</h3>
              <div className="dept-link-arrow">&rarr;</div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button className="btn btn-primary" style={{ padding: "12px 30px" }}>View All Specialities</button>
        </div>
      </div>
    </section>
  );
};

export default Departments;
