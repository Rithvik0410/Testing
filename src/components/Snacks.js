import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../prd-Homepage.css"; // Adjust the path as needed

const snacks = [
  {
    name: "Dahi Puri",
    price: 50,
    imgSrc:
      "https://www.todaystraveller.net/wp-content/uploads/2021/05/24-1024x769.jpeg",
    description:
      "A popular Indian street food consisting of small crispy puris filled with spiced potatoes, chickpeas, and tamarind chutney, topped with yogurt, sev, and spices.",
  },
  {
    name: "Samosa",
    price: 20,
    imgSrc:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
    description:
      "A Central Asian pastry filled with savory ingredients such as minced meat, onions, and spices, typically baked or fried until golden and crispy.",
  },
  {
    name: "Pani Puri",
    price: 30,
    imgSrc:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/09/CW0_7781-e1631068476630-1300x867.jpg?v=1631068280",
    description:
      "A beloved Indian street food consisting of hollow, crispy puris filled with spicy-tangy water (pani), tamarind chutney, chickpeas, and potatoes.",
  },
  // Add other snacks here
];

const SnackCard = ({ snack }) => (
  <div className="col-md-4">
    <div
      className="card product-card"
      data-name={snack.name}
      data-price={snack.price}
    >
      <img
        src={snack.imgSrc}
        className="card-img-top product-image"
        alt={snack.name}
      />
      <div className="card-body">
        <h5 className="card-title">{snack.name}</h5>
        <p className="card-text">{snack.description}</p>
        <div className="button-container">
          <button className="center btn-primary select-item">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Snacks = () => (
  <div className="bg-black text-white">
    {/* Header */}
    <header
      className="text-white d-flex justify-content-between align-items-center py-3 px-4"
      id="head"
    >
      <img
        src="http://sahyadri.edu.in/img/logo.png"
        alt="Logo"
        className="header-logo"
      />
      <h1 className="header-text m-0">Sahyadri Canteen</h1>
      <button
        className="blinking-live"
        onClick={() =>
          (window.location.href = "http://localhost:3000/student.html")
        }
      >
        LIVE
      </button>
    </header>

    <div className="container mt-4">
      {/* Rows of snacks */}
      {[0, 1, 2].map((rowIndex) => (
        <div className="row" key={rowIndex}>
          {snacks.slice(rowIndex * 3, rowIndex * 3 + 3).map((snack) => (
            <SnackCard key={snack.name} snack={snack} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Snacks;
