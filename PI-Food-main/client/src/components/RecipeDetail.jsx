import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions";
import { useEffect } from "react";
import "./RecipeDetail.css";




export default function RecipeDetail (props){
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getDetail(props.match.params.id));
    },[dispatch])

    const detailRecipe = useSelector((state)=> state.detail[0]);
    //comprobar con un if si tiene algo detailrecipe
    console.log("mantic")
    console.log(detailRecipe);
    return (
        <div>
            {
                detailRecipe?
                <div className="recipeDetailContainer">
                    <h1>Recipe Details</h1>
                    <h1>Recipe Title: {detailRecipe.title}</h1>
                    <img src={detailRecipe.image} alt="not found"/>
                    <h2>Dish Types: {detailRecipe.dishTypes?.join(", ")}</h2>
                    <h2>Diet Types: {detailRecipe.diets?.join(", ")}</h2>
                    <h2>Health Score: {detailRecipe.healthScore}</h2>
                    <div>
                        <h2>Summary: </h2>
                        <div dangerouslySetInnerHTML={{__html:detailRecipe.summary}}></div>         
                    </div>
                    <ol>
                        {Array.isArray(detailRecipe.steps) && detailRecipe.steps.map((step) => <li key={step.number}>{step.step}</li>)}
                    </ol>
                </div>:
                    <p>Loading...</p>
            }
            <Link to='/home'><button>Go back to Home</button> </Link>
        </div>
    )
}