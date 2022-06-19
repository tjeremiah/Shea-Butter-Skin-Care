import React from 'react';
import {connect } from 'react-redux';
import {link } from 'react-router-dom';
import Navbar from './Navbar'
import fetchProducts from '../redux'


export class AllProducts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
       <div class="mt-2">
        <Navbar />
          <h1>This is the Product Page</h1>


        </div>   
      )  
    }
}

const mapState = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatch = () => {
    return {
        fetchCreditors: () => dispatchEvent(fetchCreditors()),
    }
}

export default connect(mapState, mapDispatch)(AllProducts);