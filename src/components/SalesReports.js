import React, { useState, useEffect } from "react";
import axios from "axios";

const SalesReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch sales reports from server
    axios.get("/api/reports").then((response) => {
      setReports(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Sales Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            Report #{report.id} - {report.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesReports;
