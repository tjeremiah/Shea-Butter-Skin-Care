import React from 'react';
import {connect } from 'react-redux';
import {link } from 'react-router-dom';


export class AllProducts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
          <h1>This is the Product Page</h1>
      )  
    }
}

export default AllProducts;