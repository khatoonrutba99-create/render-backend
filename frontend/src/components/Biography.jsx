import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <section id="about" className="section" style={{ background: "white", padding: "80px 20px" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
        <div className="bio-img" style={{ flex: "1 1 400px" }}>
          <img src={imageUrl} alt="About Us" className="animate-float" style={{ width: "100%", borderRadius: "24px", boxShadow: "var(--shadow-lg)" }} />
        </div>
        <div className="bio-content" style={{ flex: "1 1 500px" }}>
          <h4 style={{ color: "var(--primary-color)", textTransform: "uppercase", tracking: "2px", fontWeight: "600", marginBottom: "8px" }}>Biography</h4>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>Who We Are</h2>
          <p style={{ color: "var(--text-light)", marginBottom: "16px" }}>
            At ZeeCare Hospital, we believe in a patient-first approach. Established over two decades ago, our facility has grown from a humble clinic into a multi-specialty premier hospital utilizing futuristic medical technologies.
          </p>
          <p style={{ color: "var(--text-light)", marginBottom: "24px" }}>
            Our mission is to grant accessible, high-quality medical care to every patient crossing our doors. From sophisticated diagnostics to advanced surgeries, our departments operate symbiotically to treat your condition comprehensively.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="glass-card" style={{ padding: "20px", textAlign: "center", background: "#fdf4ff", border: "none" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "2rem" }}>20+</h3>
              <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>Years Experience</p>
            </div>
            <div className="glass-card" style={{ padding: "20px", textAlign: "center", background: "#fce7f3", border: "none" }}>
              <h3 style={{ color: "var(--secondary-dark)", fontSize: "2rem" }}>50k+</h3>
              <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
