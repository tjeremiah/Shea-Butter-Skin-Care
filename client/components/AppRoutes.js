import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllProducts from "./AllProducts";
import Home from "./Home";

const AppRoutes = () => {
 return (
     <Router>
        <div>
          {/* <nav>
          <Link to='/'>
                <h1>Home</h1>
            </Link> 
            <Link to='/products'>
                <h1>All Products</h1>
            </Link>   
          </nav> */}
          {/* <main>
              <h1 id="main-title">Makeda Shea-Butter Skin Care</h1>
          </main> */}
          <Routes>
            <Route exact path="/" element={<Home />} />  
            <Route exact path="products" element={<AllProducts />} />
           {/* <Route exact path="/products/:productId" component={< SingleProduct/>}/>  */}
          </Routes>
        </div> 
     </Router>
 )      
}

export default AppRoutes;