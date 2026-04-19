import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Something went wrong!");
    }
  };

  return (
    <section className="section" style={{ background: "var(--bg-color)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2 className="section-title">Send Us A Message</h2>
        <p className="section-subtitle">Have a question securely delivered to our administrators? Use the form below!</p>
        
        <form onSubmit={handleMessage} className="glass-card" style={{ padding: "40px", background: "white" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input type="text" className="form-input" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-input" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="number" className="form-input" placeholder="03XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-input" rows="5" placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <button type="submit" className="btn btn-primary" style={{ padding: "14px 40px", width: "100%", fontSize: "1.1rem" }}>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MessageForm;
