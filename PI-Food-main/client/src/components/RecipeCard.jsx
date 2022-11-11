import React from "react";
import './RecipeCard.css';
import { Link } from "react-router-dom";

export default function RecipeCard ({ title, image, healthScore, diets, id }) {
    return (
        <div className="card">
            <Link to={"/recipes/" + id}><div>{title}</div></Link>
            <img src={image} alt="Not found" className="images"></img>
            <div>Diet Types: {diets}</div>
            <div>health Score: {healthScore}</div>
        </div>
    )

};