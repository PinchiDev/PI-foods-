import React from "react";
import './RecipeCard.css';
import { Link } from "react-router-dom";

export default function RecipeCard ({ title, image, healthScore, diets, id }) {
    return (
      <div className="card">
        <Link to={"/recipes/" + id}>
          <div className="titleDivCard">{title}</div>
          <hr></hr>
          <div>
            <img src={image} alt="Not found" className="images"></img>
          </div>
          <br></br>
          <div>Diet Types: {diets}</div>
          <br></br>
          <div>Health Score: {healthScore}</div>
        </Link>
      </div>
    );

};