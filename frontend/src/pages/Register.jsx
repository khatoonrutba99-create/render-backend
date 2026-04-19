import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../Context/AppContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/v1/user/patient/register",
        { firstName, lastName, email, phone, nic, dob, gender, password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="glass-card" style={{ padding: "40px", background: "white" }}>
          <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "8px" }}>Sign Up</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px" }}>Join the ZeeCare network today.</p>
          
          <form onSubmit={handleRegister}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input" placeholder="Last Name" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" placeholder="Email" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Component (10 Digits)</label>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" placeholder="03XXXXXXXX" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="form-group">
                <label className="form-label">NIC (12 Digits)</label>
                <input type="number" value={nic} onChange={(e) => setNic(e.target.value)} className="form-input" placeholder="NIC" />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="form-input" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-input">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="Password" />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", marginBottom: "32px" }}>
              <span style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Already Registered?</span>
              <Link to="/login" style={{ color: "var(--primary-color)", fontWeight: "500", textDecoration: "underline" }}>Login Now</Link>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px" }}>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
