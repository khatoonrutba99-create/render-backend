import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AppContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Activity, Users, CalendarCheck } from "lucide-react";

const Dashboard = () => {
  const { isAuthenticated, admin } = useContext(Context);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get("/api/v1/appointment/getall", {
          withCredentials: true,
        });
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    if (isAuthenticated) fetchAppointments();
  }, [isAuthenticated]);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prev) =>
        prev.map((appt) => (appt._id === appointmentId ? { ...appt, status } : appt))
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  const pendingCount = appointments.filter(a => a.status === 'Pending').length;
  const acceptedCount = appointments.filter(a => a.status === 'Accepted').length;

  return (
    <section className="page-header">
      <h2 className="page-title">Overview</h2>
      
      <div className="card-grid">
        <div className="stat-card">
          <div className="stat-icon"><Users size={24} /></div>
          <div className="stat-content">
            <h4>Welcome Admin</h4>
            <p style={{ fontSize: "1.2rem" }}>{admin?.firstName} {admin?.lastName}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{color: "var(--warning)", background: "rgba(255, 183, 3, 0.1)"}}><Activity size={24} /></div>
          <div className="stat-content">
            <h4>Pending Appointments</h4>
            <p>{pendingCount}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{color: "var(--success)", background: "rgba(46, 196, 182, 0.1)"}}><CalendarCheck size={24} /></div>
          <div className="stat-content">
            <h4>Accepted Appointments</h4>
            <p>{acceptedCount}</p>
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: "16px" }}>Recent Appointments</h3>
      <div className="data-table-container">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appt) => (
                <tr key={appt._id}>
                  <td>{appt.firstName} {appt.lastName}</td>
                  <td>{appt.appointment_date}</td>
                  <td>Dr. {appt.doctor.firstName} {appt.doctor.lastName}</td>
                  <td>{appt.department}</td>
                  <td>
                    <select
                      className={`status-select status-${appt.status}`}
                      value={appt.status}
                      onChange={(e) => handleUpdateStatus(appt._id, e.target.value)}
                    >
                      <option value="Pending" className="status-Pending">Pending</option>
                      <option value="Accepted" className="status-Accepted">Accepted</option>
                      <option value="Rejected" className="status-Rejected">Rejected</option>
                    </select>
                  </td>
                  <td>{appt.hasVisited ? "🟢 Visited" : "🔴 New"}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" style={{textAlign:"center"}}>No appointments found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
