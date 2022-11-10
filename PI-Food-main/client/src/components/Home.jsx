import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes, filterByDiet, filterByOrigin, alphabeticOrder, orderByHealthScore } from "../redux/actions";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './Home.css';






export default function Home (){
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipesToRender);
    const [order, setOrder] = useState("");//this state is setting the order of the render cards
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

    function handleOrderByHealthScore (e){
        e.preventDefault();
        dispatch(orderByHealthScore(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    return (
      <div>
        <div className="headerContainer">
          <div>
            <h1 className="henryRecipes">Henry Recipes</h1>
          </div>

          <div>
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Refresh Recipes
            </button>
          </div>

          <div>
            <Link to="/recipes">Create Recipe</Link>
          </div>

          <div>
            <SearchBar />
          </div>
        </div>

        <div>
          <div className="filterContainer">
            <div>
              <h3>Filter By: </h3>
            </div>

            <select onChange={(e) => handleOrder(e)}>
              <option value="asc">From A to Z</option>
              <option value="desc">From Z to A</option>
            </select>

            <select onChange={(e) => handleFilterBD(e)}>
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

            <select onChange={(e) => handleOrderByHealthScore(e)}>
              <option value="min">HealthScore min-max</option>
              <option value="max">HealthScore min-max</option>
            </select>

            <select onChange={(e) => handleFilterByOrigin(e)}>
              <option value="AllC&O">Own Recipe / Online Recipe</option>
              <option value="Created">Mi Own Recipes</option>
              <option value="Online">OnLine Recipes</option>
            </select>
          </div>
        </div>

        <div>
          <Paginado
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
          />
        </div>

        <div>
          <div>
            {currentRecipes?.map((r) => {
              return (
                <div key={r.id}>
                  <Link to={"/recipes/" + r.id}>
                    <RecipeCard
                      title={r.title}
                      healthScore={r.healthScore}
                      image={r.image}
                      diets={r.diets.join(" ,")}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};
