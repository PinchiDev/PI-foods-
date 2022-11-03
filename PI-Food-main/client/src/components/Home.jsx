import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes } from "../redux/actions";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";




export default function Home (){
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);

    useEffect (()=>{
        dispatch(getRecipes())
    },[dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }

    return (
        <div>
            <Link to="/recipes">Create Recipe</Link>

            <button onClick={e => {handleClick(e)}}>Refresh Search</button>

            <div>
                <select>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>

                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <select>
                    <option value="Frutarian">Frutarian</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Lacto Vegetarian">Lacto Vegetarian</option>
                    <option value="Low FODMAP">Low FODMAP</option>
                    <option value="Ovo Vegetarian">Ovo Vegetarian</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Pescetarian">Pescetarian</option>
                    <option value="Primal">Primal</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Whole 30">Whole 30</option>
                </select>

                {
                    allRecipes?.map(r =>{
                        return (
                            <div key={r.id}>
                                <Link to={"/recipes/" + r.id}>
                                    <RecipeCard name={r.name} healthScore={r.healthScore} image={r.image} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
