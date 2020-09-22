import { json } from "msw/lib/types/context";
import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const response = await fetch('/api/recipes');
      if (response.ok) {
        const jsonResponse = await response.json();
        setRecipes(jsonResponse.recipes);
      }
    }
    fetchAllRecipes();
  })
}

export const Recipes = () => {
  return (
    <div>
      <h1>Recipe Finder</h1>
      <form>
        <input 
        type="text"
        name="ingredient"
        placeholder="Enter an ingredient to find recipes..."
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};
