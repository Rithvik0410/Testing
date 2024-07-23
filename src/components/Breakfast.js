import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../prd-Homepage.css"; // Ensure this path is correct

const Breakfast = () => {
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
        {/* First row */}
        <div className="row">
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Masala Dosa"
              data-price="50"
            >
              <img
                src="https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg"
                className="card-img-top product-image"
                alt="Masala Dosa"
              />
              <div className="card-body">
                <h5 className="card-title">Masala Dosa</h5>
                <p className="card-text">
                  Indian crepe with burst of flavorful mashed potato.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Idli-Vada"
              data-price="40"
            >
              <img
                src="https://t4.ftcdn.net/jpg/04/65/28/87/360_F_465288715_F3uc0aZMhzSbNbftEzHSb6RfUVQfCHeU.jpg"
                className="card-img-top product-image"
                alt="Idli-Vada"
              />
              <div className="card-body">
                <h5 className="card-title">Idli-Vada</h5>
                <p className="card-text">
                  Steamed rice cake with a side of crispy rice cake.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Neer Dosa"
              data-price="30"
            >
              <img
                src="https://myfoodstory.com/wp-content/uploads/2022/07/Neer-Dosa-1.jpg"
                className="card-img-top product-image"
                alt="Neer Dosa"
              />
              <div className="card-body">
                <h5 className="card-title">Neer Dosa</h5>
                <p className="card-text">Dosa batter which is watered down.</p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="row">
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Avalakki"
              data-price="20"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmksFq3upP8H2kfBgr-Wu164zrono53IhUA&s"
                className="card-img-top product-image"
                alt="Avalakki"
              />
              <div className="card-body">
                <h5 className="card-title">Avalakki</h5>
                <p className="card-text">
                  Flattened rice, also known as poha, often used in Indian
                  cuisine for a variety of dishes.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Puri Bhaji"
              data-price="35"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0uduLlt0XLC-uWvJNEVk7Sa3_5T2mGFwhQ&s"
                className="card-img-top product-image"
                alt="Puri Bhaji"
              />
              <div className="card-body">
                <h5 className="card-title">Puri Bhaji</h5>
                <p className="card-text">
                  A traditional Indian dish consisting of deep-fried bread
                  (puri) served with a spiced potato curry (bhaji).
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Pulao"
              data-price="40"
            >
              <img
                src="https://www.chefkunalkapur.com/wp-content/uploads/2022/11/DSC05514-1300x731.jpg?v=1667931759"
                className="card-img-top product-image"
                alt="Pulao"
              />
              <div className="card-body">
                <h5 className="card-title">Pulao</h5>
                <p className="card-text">
                  A fragrant rice dish cooked with spices, vegetables, and
                  sometimes meat, commonly enjoyed in South Asian cuisine.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="row">
          <div className="col-md-4">
            <div className="card product-card" data-name="Upma" data-price="25">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0de1eEupTPb0iTslAZVZ4n469Md4oyPMd1w&s"
                className="card-img-top product-image"
                alt="Upma"
              />
              <div className="card-body">
                <h5 className="card-title">Upma</h5>
                <p className="card-text">
                  A savory South Indian dish made from semolina (rava) cooked
                  with spices and vegetables.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card product-card" data-name="Buns" data-price="30">
              <img
                src="https://rakskitchen.net/wp-content/uploads/2020/05/mangalore-buns-500x375.jpg"
                className="card-img-top product-image"
                alt="Buns"
              />
              <div className="card-body">
                <h5 className="card-title">Buns</h5>
                <p className="card-text">
                  Soft, slightly sweet deep-fried bread made with fermented
                  dough, popular in South India, especially in Karnataka.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Ragi Mudde"
              data-price="25"
            >
              <img
                src="https://recipes.net/wp-content/uploads/2024/01/how-to-eat-ragi-mudde-1706099478.jpg"
                className="card-img-top product-image"
                alt="Ragi Mudde"
              />
              <div className="card-body">
                <h5 className="card-title">Ragi Mudde</h5>
                <p className="card-text">
                  A traditional South Indian dish made from finger millet flour,
                  cooked into dense, nutritious balls.
                </p>
                <div className="button-container">
                  <button className="center btn-primary select-item">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
