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
      <div className="rootDiv">
        <div className="headerContainer">
          <div className="henryRecipesContainer">
            <h1 className="henryRecipes">Henry Recipes</h1>
          </div>
          <div>
            <Link to="/recipes">
              <button>Create Recipe</button>
            </Link>
          </div>
          <div>
            <SearchBar />
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
        </div>

        <div>
          <div className="filterContainer">

            <div className="filterOrderContainer">
              <div>
                <h3>Filter By: </h3>
              </div>
              <div className="filtersBoxes">
              <select onChange={(e) => handleFilterByOrigin(e)} >
                <option value="AllC&O">Own Recipe / Online Recipe</option>
                <option value="Created">Mi Own Recipes</option>
                <option value="Online">OnLine Recipes</option>
              </select>
              </div>
              <div className="filtersBoxes">
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
              </div>
              <div className="filterOrderContainer">
                  <h3>Order By: </h3>
                  <div className="filtersBoxes">
                  <select onChange={(e) => handleOrder(e)} >
                    <option value="asc">Alphabetic A - Z</option>
                    <option value="desc">Alphabetic Z - A</option>
                  </select>
                  </div>
                  <div className="filtersBoxes">
                  <select onChange={(e) => handleOrderByHealthScore(e)}>
                    <option value="min">HealthScore min-max</option>
                    <option value="max">HealthScore min-max</option>
                  </select>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Paginado
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
          />
        </div>

        <div className="containerCardContainer">
          <div className="cardContainer">
            {currentRecipes?.map((r) => {
              return (
                    <RecipeCard
                      id={r.id}
                      key={r.id}
                      title={r.title}
                      healthScore={r.healthScore}
                      image={r.image}
                      diets={r.diets?.join(" ,")}
                    />
              );
            })}
          </div>
        </div>
      </div>
    );
};
