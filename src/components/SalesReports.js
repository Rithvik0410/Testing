import React, { useState, useEffect } from "react";
import axios from "axios";

const SalesReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch sales reports from backend
    axios
      .get("/api/reports")
      .then((response) => setReports(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Sales Reports</h2>
      {/* Render sales reports */}
    </div>
  );
};

export default SalesReports;
