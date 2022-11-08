import React from "react";

export default function RecipeCard ({ title, image, healthScore, diets }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Diet Types: {diets}</h2>
            <h3>health Score:{healthScore}</h3>
            <img src={image} alt="Not found"></img>
        </div>
    )

};