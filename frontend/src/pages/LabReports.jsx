import React from "react";
import "./FeaturePages.css";
import { toast } from "react-toastify";

const LabReports = () => {
  const reports = [
    { id: "LR-2024-001", testName: "Complete Blood Count", date: "10 Apr 2024", status: "Available" },
    { id: "LR-2024-002", testName: "Lipid Profile", date: "15 Mar 2024", status: "Available" },
    { id: "LR-2024-003", testName: "Thyroid Profile Total", date: "02 Feb 2024", status: "Available" }
  ];

  const handleDownload = (id) => {
    toast.info(`Requesting report ${id}...`);
    setTimeout(() => {
        toast.success(`Successfully downloaded ${id}.pdf!`);
    }, 1500);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Lab Reports</h1>
          <p>Securely access and download your medical diagnostic reports.</p>
        </div>
      </div>

      <div className="container page-content">
        <h2>Your Recent Reports</h2>
        <p style={{ color: "var(--text-light)", marginBottom: "20px" }}>Below is a history of your latest diagnostic tests with us.</p>
        
        <div style={{ overflowX: "auto" }}>
          <table className="mock-table">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Test Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: "500", color: "var(--primary-dark)" }}>{report.id}</td>
                  <td>{report.testName}</td>
                  <td>{report.date}</td>
                  <td>
                    <span style={{ background: "#fce7f3", color: "var(--secondary-dark)", padding: "4px 8px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600" }}>
                      {report.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleDownload(report.id)} className="btn btn-secondary nav-btn-outline" style={{ padding: "6px 12px", fontSize: "0.85rem", cursor: "pointer" }}>
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LabReports;
