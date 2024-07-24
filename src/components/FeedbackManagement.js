import React, { useState, useEffect } from "react";
import axios from "axios";

const FeedbackManagement = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Fetch feedback from server
    axios.get("/api/feedback").then((response) => {
      setFeedback(response.data);
    });
  }, []);

  const handleFeedbackResponse = (feedbackId) => {
    // Logic for responding to feedback
  };

  return (
    <div>
      <h2>User Feedback</h2>
      <ul>
        {feedback.map((fb) => (
          <li key={fb.id}>
            {fb.message}
            <button onClick={() => handleFeedbackResponse(fb.id)}>
              Respond
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackManagement;
