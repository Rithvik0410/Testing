// src/components/Checkout.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Checkout.css";

const Checkout = ({ cart, total }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Checkout</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                No items in the cart
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="text-right">
        <h4>Total: ₹{total.toFixed(2)}</h4>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary proceed-to-payment">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
