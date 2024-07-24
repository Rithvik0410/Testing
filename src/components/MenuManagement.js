import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from server
    axios.get("/api/menu").then((response) => {
      setMenuItems(response.data);
    });
  }, []);

  const handleUpdateMenu = () => {
    // Logic for updating menu
  };

  return (
    <div>
      <h2>Manage Menu</h2>
      <button onClick={handleUpdateMenu}>Update Menu</button>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuManagement;
