import React from "react";
import "./Paginado.css";

export default function Paginado ({ recipesPerPage,allRecipes,paginado}){
    const pageNumbers = [];

    for (let i=0; i< Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumbers.push(i+1);
    }

    return (
        <nav>
            <div>
            <div className="pagesContainer">
                {
                    pageNumbers && pageNumbers.map(number =>(
                        <div key={number} className="pageNumber">
                            <a onClick={()=> paginado(number)}>{number}</a>
                        </div>
                    ))}
            </div>
            </div>
        </nav>
    )
}