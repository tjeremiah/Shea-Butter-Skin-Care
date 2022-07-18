import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllProducts from "./AllProducts";
import Home from "./Home";

const AppRoutes = () => {
 return (
     <Router>
        <div>
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