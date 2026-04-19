import React, { useContext, useState } from "react";
import { Context } from "../Context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigate = useNavigate();
  const departmentsArray = ["Pediatrics", "Orthopedics", "Cardiology", "Neurology", "Oncology", "Radiology", "Physical Therapy", "Dermatology", "ENT"];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);

      const { data } = await axios.post("/api/v1/user/doctor/addnew", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="page-header">
      <h2 className="page-title">Register New Doctor</h2>
      <div className="form-card">
        <form onSubmit={handleAddNewDoctor}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <img src={docAvatarPreview ? docAvatarPreview : "https://via.placeholder.com/150"} alt="Doctor Avatar" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--primary)", marginBottom: "16px" }} />
          </div>
          <div className="form-group" style={{ textAlign: "center", marginBottom: "32px" }}>
            <input type="file" onChange={handleAvatar} style={{ border: "none" }} />
          </div>

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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Department</label>
              <select value={doctorDepartment} onChange={(e) => setDoctorDepartment(e.target.value)}>
                <option value="">Select Department</option>
                {departmentsArray.map((dept, index) => (
                  <option value={dept} key={index}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="form-group"><label>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          </div>
          <button type="submit" style={{ marginTop: "16px" }}>Register Doctor</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
