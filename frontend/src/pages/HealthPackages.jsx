import React from "react";
import { Link } from "react-router-dom";
import "./FeaturePages.css";

const HealthPackages = () => {
  const packages = [
    {
      title: "Comprehensive Heart Check",
      icon: "❤️",
      price: "₹ 2,999",
      features: ["ECG & Echo", "Lipid Profile", "Cardiologist Consultation", "Blood Pressure Monitoring"],
    },
    {
      title: "Master Health Checkup",
      icon: "🩺",
      price: "₹ 4,499",
      features: ["Complete Blood Count", "Liver Function Test", "Kidney Function Test", "Thyroid Profile", "Physician Consultation"],
    },
    {
      title: "Women's Wellness Package",
      icon: "🌸",
      price: "₹ 3,999",
      features: ["Pap Smear", "Breast Examination", "Bone Density Test", "Gynaecologist Consultation"],
    },
    {
      title: "Senior Citizen Care",
      icon: "👴",
      price: "₹ 3,499",
      features: ["Eye Checkup", "Hearing Test", "Bone Health", "Geriatrician Consultation"],
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Health Checkup Packages</h1>
          <p>Preventive care is the best care. Choose a package that suits your needs.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="feature-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{pkg.icon}</div>
              <h3>{pkg.title}</h3>
              <div className="price-tag">{pkg.price}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0", textAlign: "left" }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: "10px", color: "var(--text-light)" }}>✓ {feature}</li>
                ))}
              </ul>
              <Link to="/appointment" className="btn btn-primary" style={{ width: "100%" }}>Book Package</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
