import React from 'react';
import {connect } from 'react-redux';
import {link } from 'react-router-dom';
import Navbar from './Navbar'
import fetchProducts from '../redux/products'

export class AllProducts extends React.Component {
    constructor(props) {
      super(props)
    }
    
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
     console.log("AllProducts", this.props)  
      return (
       <div className="mt-2">
        <Navbar />
        <h1>Products</h1>


        </div>   
      )  
    }
}

const mapState = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    };
};

export default connect(mapState, mapDispatch)(AllProducts);