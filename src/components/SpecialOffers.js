import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homepage.css"; // Ensure this path is correct
import { useHistory } from "react-router-dom";

const SpecialOffers = () => {
  const history = useHistory();

  const handleCardClick = (url) => {
    history.push(url);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white d-flex justify-content-between align-items-center py-3 px-4">
        <img
          src="http://sahyadri.edu.in/img/logo.png"
          alt="Logo"
          className="header-logo"
        />
        <h1 className="header-text m-0">Sahyadri Canteen</h1>
        <button
          className="blinking-live"
          onClick={() =>
            (window.location.href = "http://localhost:3004/student.html")
          }
        >
          LIVE
        </button>
      </header>

      <div className="container mt-4">
        {/* Title */}
        <h2 className="text-right-justify md-4 special-title">
          TODAY'S SPECIAL
        </h2>

        {/* Product Icons */}
        <div className="row">
          <div className="col-4">
            <div
              className="card product-card"
              onClick={() => handleCardClick("/breakfast")}
            >
              <img
                src="https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg"
                className="card-img-top product-image"
                alt="Breakfast"
              />
              <div className="card-body">
                <h5 className="card-title">Breakfast</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card product-card"
              onClick={() => handleCardClick("/lunch")}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/035/375/492/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"
                className="card-img-top product-image"
                alt="Lunch"
              />
              <div className="card-body">
                <h5 className="card-title">Lunch</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card product-card"
              onClick={() => handleCardClick("/snacks")}
            >
              <img
                src="https://www.todaystraveller.net/wp-content/uploads/2021/05/24-1024x769.jpeg"
                className="card-img-top product-image"
                alt="Snacks"
              />
              <div className="card-body">
                <h5 className="card-title">Snacks</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>&copy; 2024 Our Hotel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SpecialOffers;
