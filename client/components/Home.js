import React from "react";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <h1 className="text-center font-weight-bold">Kindness Shea-Butter SkinCare</h1>
    
            <Navbar />
            
            
        <div className="jumbotron jumbotron-fluid bg-info">
            <div className="container" >
                <h1 className="display-4 text-center font-weight-bold">Kindness SkinCare</h1>
                <p className="lead text-center font-weight-bold">Clinically Kind For Sensitive Skin</p>
            </div>
        </div>

        </div>

       
    )
}

export default Home;