import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes, filterByDiet, filterByOrigin, alphabeticOrder } from "../redux/actions";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";






export default function Home (){
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipesToRender);
    const [order, setOrder] = useState("");
    const [currentPage,setCurrentPage] = useState(1);
    const [recipesPerPage,setRecipesPerPage] = useState(9);
    const lastRecipe = currentPage * recipesPerPage;
    const firstRecipe = lastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(firstRecipe,lastRecipe)


    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }

    useEffect (()=>{
        dispatch(getRecipes())
    },[dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }

    function handleFilterBD (e) {
        e.preventDefault();
        dispatch(filterByDiet(e.target.value))
    }

    function handleFilterByOrigin (e) {
        dispatch(filterByOrigin(e.target.value))
    }

    function handleOrder (e) {
        e.preventDefault();
        dispatch(alphabeticOrder(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)

    }

    return (
        <div>
            <Link to="/recipes">Create Recipe</Link>

            <button onClick={e => {handleClick(e)}}>Refresh Recipes</button>

            <div>

            <select onChange={e=> handleFilterByOrigin(e)}>
                    <option value="AllC&O">Own Recipe / Online Recipe</option>
                    <option value="Created">Mi Own Recipes</option>
                    <option value="Online">OnLine Recipes</option>
                </select>

                <select onChange={e=> handleOrder(e)}>
                    <option value="asc">From A to Z</option>
                    <option value="desc">From Z to A</option>
                </select>

                <select>
                    <option value="AllN">Health Scores</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <select onChange={e=> handleFilterBD(e)}>
                    <option value="AllDT">Diet Types</option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="frutarian">Frutarian</option>
                    <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="lacto Vegetarian">Lacto Vegetarian</option>
                    <option value="low FODMAP">Low FODMAP</option>
                    <option value="ovo Vegetarian">Ovo Vegetarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="primal">Primal</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="whole 30">Whole 30</option>
                </select>

                <SearchBar/>

                <Paginado 
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginado={paginado}
                />


                {
                    currentRecipes?.map(r =>{
                        return (
                            <div key={r.id}>
                                <Link to={"/recipes/" + r.id}>
                                    <RecipeCard title={r.title} healthScore={r.healthScore} image={r.image} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
