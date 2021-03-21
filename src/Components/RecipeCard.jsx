import React from "react";

function RecipeCard() {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <p>Salad</p>
        </div>
        <div className="info">
          <h2>Southern-Style Chicken Salad with Cranberry</h2>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
