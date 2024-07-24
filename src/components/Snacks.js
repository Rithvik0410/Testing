import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../prd-Homepage.css"; // Ensure this path is correct

const formatPrice = (price) => `₹${price.toFixed(2)}`;

const Snacks = () => {
  const { cart, incrementItem, decrementItem } = useContext(CartContext);

  const products = [
    {
      name: "Dahi Puri",
      price: 50,
      image:
        "https://www.todaystraveller.net/wp-content/uploads/2021/05/24-1024x769.jpeg",
      description:
        "A popular Indian street food consisting of small crispy puris filled with spiced potatoes, chickpeas, and tamarind chutney, topped with yogurt, sev, and spices.",
    },
    {
      name: "Samosa",
      price: 20,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
      description:
        "A Central Asian pastry filled with savory ingredients such as minced meat, onions, and spices, typically baked or fried until golden and crispy.",
    },
    {
      name: "Pani Puri",
      price: 30,
      image:
        "https://www.chefkunalkapur.com/wp-content/uploads/2021/09/CW0_7781-e1631068476630-1300x867.jpg?v=1631068280",
      description:
        "A beloved Indian street food consisting of hollow, crispy puris filled with spicy-tangy water (pani), tamarind chutney, chickpeas, and potatoes.",
    },
    {
      name: "Bhel Puri",
      price: 25,
      image:
        "https://www.cookshideout.com/wp-content/uploads/2016/09/Veg-Bhel_FI.jpg",
      description:
        "A delightful Indian snack made with puffed rice, vegetables like onions and tomatoes, tangy tamarind chutney, and a blend of spices, served crispy and refreshing.",
    },
    {
      name: "Sev Puri",
      price: 25,
      image:
        "https://cdn.tarladalal.com/members/9306/procstepimgs/sev_puri_dsc_6029-(1)-11-187085.jpg",
      description:
        "A popular Indian street food where crispy puris are topped with mashed potatoes, onions, tomatoes, tamarind chutney, and a generous sprinkling of fine sev (crispy chickpea flour noodles).",
    },
    {
      name: "Pav Bhaji",
      price: 40,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*eGylbteKGLepWGU0HNJAKw.jpeg",
      description:
        "A delicious and spicy Indian street food dish consisting of a buttery, mashed vegetable (usually potato, tomato, and peas) curry served with soft bread rolls (pav).",
    },
    {
      name: "Papdi Chaat",
      price: 35,
      image:
        "https://ranveerbrar.com/wp-content/uploads/2023/04/Papdi-chaat.jpeg",
      description:
        "A flavorful Indian street food made with crispy fried dough wafers (papdi) topped with yogurt, tamarind chutney, chaat masala, and various other ingredients like potatoes, onions, and sev.",
    },
    {
      name: "Aloo Tikki Chaat",
      price: 30,
      image:
        "https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Aloo-Tikki-Chaat61.jpg",
      description:
        "A popular Indian street food where spicy mashed potato patties (aloo tikki) are topped with yogurt, tamarind chutney, and chaat masala, creating a delightful mix of flavors and textures.",
    },
    {
      name: "Masala Puri",
      price: 30,
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2017/10/masala-puri-chaat-recipe28.jpg",
      description:
        "A South Indian dish where crispy puris are topped with a spicy and tangy gravy made from dried peas, often garnished with onions, tomatoes, sev, and cilantro.",
    },
    // Add more products as needed
  ];

  const getQuantity = (productName) => {
    const item = cart.find((item) => item.name === productName);
    return item ? item.quantity : 0;
  };

  return (
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
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.name}>
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    Price: {formatPrice(product.price)}
                  </p>
                  <div className="button-container">
                    <button
                      className="btn btn-secondary"
                      onClick={() => decrementItem(product)}
                      disabled={getQuantity(product.name) === 0}
                    >
                      -
                    </button>
                    <span className="mx-2">{getQuantity(product.name)}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => incrementItem(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/checkout" className="btn btn-success">
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Snacks;
