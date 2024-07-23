// src/components/Lunch.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../prd-Homepage.css"; // Ensure this path is correct

const Lunch = ({ addToCart }) => {
  const products = [
    {
      name: "Chicken Biryani",
      price: 80,
      image:
        "https://static.vecteezy.com/system/resources/previews/035/375/492/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg",
    },
    {
      name: "Paneer Butter Masala",
      price: 70,
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Paneer-Butter-Masala-6.jpg",
    },
    {
      name: "Chole Bhature",
      price: 60,
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2016/05/chole-bhature-recipe-6.jpg",
    },
    // Add more products as needed
  ];
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
              data-name="Biryani"
              data-price="80"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/035/375/492/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"
                className="card-img-top product-image"
                alt="Chicken Biryani"
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Biryani</h5>
                <p className="card-text">
                  A flavorful and aromatic dish made with basmati rice,
                  marinated chicken, and a blend of spices, layered and cooked
                  together.
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
              data-name="Mini Meals"
              data-price="35"
            >
              <img
                src="https://www.tomatoblues.com/wp-content/uploads/2021/11/one-pot-rasam-sadam-2-500x375.jpg"
                className="card-img-top product-image"
                alt="Rasam Rice"
              />
              <div className="card-body">
                <h5 className="card-title">Rasam Rice</h5>
                <p className="card-text">
                  A South Indian comfort food where tangy, spiced tamarind soup
                  (rasam) is mixed with steamed rice.
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
            <div className="card product-card" data-name="Naan" data-price="50">
              <img
                src="https://c.ndtvimg.com/2020-07/d63ps02g_naan_625x300_09_July_20.jpg"
                className="card-img-top product-image"
                alt="Naan"
              />
              <div className="card-body">
                <h5 className="card-title">Naan</h5>
                <p className="card-text">
                  A soft, leavened Indian bread typically cooked in a tandoor
                  oven, enjoyed with various curries or as a standalone treat.
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

        {/* Second row */}
        <div className="row">
          <div className="col-md-4">
            <div
              className="card product-card"
              data-name="Special Meals"
              data-price="60"
            >
              <img
                src="https://m.economictimes.com/thumb/msid-106630607,width-1200,height-900,resizemode-4,imgsize-62986/veg-thali-cost.jpg"
                className="card-img-top product-image"
                alt="Veg Thali"
              />
              <div className="card-body">
                <h5 className="card-title">Veg Thali</h5>
                <p className="card-text">
                  A traditional Indian meal comprising a variety of vegetarian
                  dishes served on a single platter, offering a balanced
                  culinary experience.
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
              data-name="Kebab Rice"
              data-price="80"
            >
              <img
                src="https://145018194.cdn6.editmysite.com/uploads/1/4/5/0/145018194/s896786561886548559_p72_i2_w1024.jpeg"
                className="card-img-top product-image"
                alt="Non-Veg Thali"
              />
              <div className="card-body">
                <h5 className="card-title">Non-Veg Thali</h5>
                <p className="card-text">
                  Similar to a Veg Thali but includes non-vegetarian dishes such
                  as meat, fish, or poultry, along with sides and bread.
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
              data-name="Gobi Manchurian"
              data-price="50"
            >
              <img
                src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/Gobi-Manchurian.jpg"
                className="card-img-top product-image"
                alt="Gobi Manchurian"
              />
              <div className="card-body">
                <h5 className="card-title">Gobi Manchurian</h5>
                <p className="card-text">
                  A popular Indo-Chinese dish where crispy fried cauliflower is
                  tossed in a spicy, tangy Manchurian sauce.
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
            <div
              className="card product-card"
              data-name="Kebab"
              data-price="45"
            >
              <img
                src="https://t4.ftcdn.net/jpg/05/85/17/03/360_F_585170352_7D9PjNXOvU3PAB4ynMRWpEavhBNuLG3J.jpg"
                className="card-img-top product-image"
                alt="Chicken Kebab"
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Kebab</h5>
                <p className="card-text">
                  Grilled or skewered pieces of marinated chicken, seasoned with
                  spices and herbs, often served as an appetizer or main dish.
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
              data-name="Curd Rice"
              data-price="45"
            >
              <img
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2-500x500.jpg"
                className="card-img-top product-image"
                alt="Curd Rice"
              />
              <div className="card-body">
                <h5 className="card-title">Curd Rice</h5>
                <p className="card-text">
                  A soothing South Indian dish made by mixing cooked rice with
                  yogurt and seasoned with mustard seeds, curry leaves, and
                  sometimes grated vegetables.
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
              data-name="Fish Curry"
              data-price="60"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDyQ_ru7_NTzhT7YIKwspCCAwdrRnq6zxnQ&s"
                className="card-img-top product-image"
                alt="Fish Curry"
              />
              <div className="card-body">
                <h5 className="card-title">Fish Curry</h5>
                <p className="card-text">
                  A flavorful dish made with fish cooked in a spicy and tangy
                  sauce, typically prepared with coconut milk or tomatoes in
                  various regional styles across India and beyond.
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

        {/* Additional rows */}
        {/* Repeat similar code for additional rows */}
      </div>
    </div>
  );
};

export default Lunch;
