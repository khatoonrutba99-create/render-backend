import React, { useContext, useState } from "react";
import { Context } from "../Context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddNewAdmin = () => {
  const { isAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/user/admin/addnew",
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="page-header">
      <h2 className="page-title">Add New Admin</h2>
      <div className="form-card">
        <form onSubmit={handleAddNewAdmin}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group"><label>First Name</label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
            <div className="form-group"><label>Last Name</label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group"><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <div className="form-group"><label>Phone (10 Digits)</label><input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group"><label>NIC (12 Digits)</label><input type="number" value={nic} onChange={(e) => setNic(e.target.value)} /></div>
            <div className="form-group"><label>Date of Birth</label><input type="date" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group"><label>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          </div>
          <button type="submit" style={{ marginTop: "16px" }}>Register Admin</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewAdmin;
