import React from "react";

export default function RecipeCard ({ title, image, healthScore }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>health Score:{healthScore}</h2>
            <img src={image} alt="image not found"></img>
        </div>
    )

};