import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from server
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const handleOrderUpdate = () => {
    // Logic for updating orders
  };

  return (
    <div>
      <h2>Manage Orders</h2>
      <button onClick={handleOrderUpdate}>Update Orders</button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
