import React, { useState, useEffect } from "react";
import axios from "axios";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedbacks from backend
    axios
      .get("/api/feedback")
      .then((response) => setFeedbacks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Feedback</h2>
      {/* Render feedbacks */}
    </div>
  );
};

export default Feedback;
