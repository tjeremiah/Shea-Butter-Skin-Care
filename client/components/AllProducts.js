import React from 'react';
import {connect } from 'react-redux';
import {link } from 'react-router-dom';
import Navbar from './Navbar'


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

export default AllProducts;