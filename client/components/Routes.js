import React from "react";
import { BrowserRouter as Router, route, Link, Switch} from "react-router-dom";
import AllProducts from "./AllProducts";

const Routes = () => {
 return (
     <Router>
        <div>
          <nav>
            <Link to='/products'>
                <h1>All Products</h1>
            </Link>   
          </nav>
          <main>
              <h1 id="main-title">Makeda Shea-Butter Skin Care</h1>
          </main>
        </div> 
     </Router>
 )      
}