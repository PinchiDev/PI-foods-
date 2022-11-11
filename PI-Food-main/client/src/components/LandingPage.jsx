import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css"


function LandingPage () {
    return (
        <div className="landingBox">
            <h1 className="wellcome"> Welcome to mi Individual Proyect - Foods</h1>
            <h1 className="wellcome">by Carmelo Cabezon</h1>
            <div className="divButtonLanding">
                <Link to="/home">
                    <button className="buttonLanding">Enter MiRecipePage</button>
                </Link>
            </div>
        </div>
    )
};

export default LandingPage;