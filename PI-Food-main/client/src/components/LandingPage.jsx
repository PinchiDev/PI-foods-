import React from "react";
import {Link} from "react-router-dom";


function LandingPage () {
    return (
        <div>
            <h1> Wellcome to mi Individual Proyect for Henry Bootcamp - Foods - by Carmelo Cabezon</h1>
            <Link to="/home">
                <button>Enter MiRecipePage</button>
            </Link>
        </div>
    )
};

export default LandingPage;