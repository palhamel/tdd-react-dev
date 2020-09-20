import React from "react";

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
