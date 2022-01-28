import React from "react";
import "./food.css"
import menu from "./menu.jpeg"
function Food() {
  return (
    <div className="Food">
      <header className="Food-header">
      <img src={menu} alt="" />
      </header>
    </div>
  );
}



export default Food;