import React from "react";
import "../ComponentCSS/LatestRecipes.css";
import RecipeCard from "./RecipeCard";

function LatestRecipes() {
  return (
    <div className="recipeMainDiv">
      <h1>Latest Recipes</h1>
      <div className="recipeContainer">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
      <p className="recipesViewAll">View All</p>
    </div>
  );
}

export default LatestRecipes;
