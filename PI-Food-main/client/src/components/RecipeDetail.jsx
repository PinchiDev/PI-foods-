import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions";
import { useEffect } from "react";




export default function RecipeDetail (props){
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getDetail(props.match.params.id));
    },[dispatch])

    const detailRecipe = useSelector((state)=> state.detail[0]);


    return (
        <div>
            {
                detailRecipe?
                <div>
                    <h1>Recipe Details</h1>
                    <h1>Recipe Title: {detailRecipe.title}</h1>
                    <h2>Dish Types: {detailRecipe.dishTypes.join(", ")}</h2>
                    <h2>Diet Types: {detailRecipe.diets.join(", ")}</h2>
                    <h2>Health Score: {detailRecipe.healthScore}</h2>
                    <div dangerouslySetInnerHTML={{__html:detailRecipe.summary}}></div>
                    <div>Steps: {JSON.stringify(detailRecipe.steps)}</div>
                    </div>:
                    <p>Loading...</p>
            }
            <Link to='/home'><button>Go back to Home</button> </Link>
        </div>
    )
}