import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./FeaturePages.css";

const Pharmacy = () => {
  const handleUpload = (e) => {
    e.preventDefault();
    toast.success("Prescription uploaded successfully! Our pharmacist will contact you shortly.");
  };

  const categories = [
    { name: "Prescription Medicines", icon: "💊" },
    { name: "Over the Counter", icon: "🩹" },
    { name: "Vitamins & Supplements", icon: "🌿" },
    { name: "Medical Devices", icon: "🩺" }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Online Pharmacy</h1>
          <p>Order medicines online and get them delivered to your doorstep.</p>
        </div>
      </div>

      <div className="container page-content">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          
          <div style={{ flex: "1 1 300px" }}>
            <h2>Upload Prescription</h2>
            <p style={{ color: "var(--text-light)", marginBottom: "20px" }}>Have a valid prescription? Upload it securely and we will arrange your medicines.</p>
            <form onSubmit={handleUpload} className="glass-card" style={{ padding: "30px", border: "1px solid var(--border-color)" }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" required placeholder="Your contact number" />
              </div>
              <div className="form-group">
                <label className="form-label">Attach Prescription (Image/PDF)</label>
                <input type="file" className="form-input" required accept="image/*,.pdf" style={{ background: "transparent" }} />
              </div>
              <button type="submit" className="btn btn-secondary nav-btn-outline" style={{ width: "100%", marginTop: "10px" }}>Upload & Order</button>
            </form>
          </div>

          <div style={{ flex: "1 1 300px" }}>
            <h2>Browse Categories</h2>
            <p style={{ color: "var(--text-light)", marginBottom: "20px" }}>Explore our wide range of healthcare products.</p>
            <div className="feature-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {categories.map((cat, index) => (
                <div key={index} className="feature-card" style={{ padding: "20px", cursor: "pointer" }} onClick={() => toast.info("Category catalog coming soon!")}>
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{cat.icon}</div>
                  <h4 style={{ fontSize: "1rem" }}>{cat.name}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
