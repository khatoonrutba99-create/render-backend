import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="zeecare-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">ZeeCare <br/><span>HOSPITALS</span></h2>
            <p className="footer-desc">
              ZeeCare Hospitals is one of India's foremost multi-speciality healthcare providers catering 
              to both Indian and international patients. We are a part of the ZeeCare Education and Medical Group (ZEMG).
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">F</a>
              <a href="#" className="social-icon">T</a>
              <a href="#" className="social-icon">I</a>
              <a href="#" className="social-icon">Y</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Patient Guide</h3>
            <ul>
              <li><Link to="#">Find a Doctor</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
              <li><Link to="#">Health Checkup Packages</Link></li>
              <li><Link to="#">Patient Registration</Link></li>
              <li><Link to="#">International Patients</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Centres of Excellence</h3>
            <ul>
              <li><Link to="#">Cardiology</Link></li>
              <li><Link to="#">Neurology</Link></li>
              <li><Link to="#">Orthopaedics</Link></li>
              <li><Link to="#">Oncology</Link></li>
              <li><Link to="#">Paediatrics</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li><strong>Emergency:</strong> 175 5000 222</li>
              <li><strong>Enquiries:</strong> +91 730-0002-175</li>
              <li><strong>Email:</strong> info@ZeeCarehospitals.com</li>
               <li><strong>Time:</strong> 24/7</li>
                <li><strong>Address:</strong> Kc road street no.4,Barnala,Punjab-148101</li>
            </ul>
            <div style={{ marginTop: "20px" }}>
              <Link to="/contact" className="btn btn-secondary nav-btn-outline" style={{ display: "inline-block", background: "white", color: "var(--primary-dark)" }}>Enquire Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} ZeeCare. All Rights Reserved.</p>
          <div className="bottom-links">
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
