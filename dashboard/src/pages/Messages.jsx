import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AppContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Messages = () => {
  const { isAuthenticated } = useContext(Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get("/api/v1/message/getall", {
          withCredentials: true,
        });
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    if (isAuthenticated) fetchMessages();
  }, [isAuthenticated]);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <section className="page-header">
      <h2 className="page-title">Patient Messages</h2>
      <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
        {messages.length > 0 ? (
          messages.map((element) => (
            <div className="stat-card" key={element._id} style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
              <h4>{element.firstName} {element.lastName}</h4>
              <div style={{ display: "flex", gap: "16px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                <p>Email: {element.email}</p>
                <p>Phone: {element.phone}</p>
              </div>
              <p style={{ marginTop: "8px" }}>"{element.message}"</p>
            </div>
          ))
        ) : (
          <p>No messages available.</p>
        )}
      </div>
    </section>
  );
};

export default Messages;
