// This file sets up React. You shouldn't need to edit it.
import React from 'react';
import {render} from 'react-dom';
//import {Provider} from 'react-redux';

//import {store} from './store';
import AppRoutes from './components/AppRoutes';


render (
    <AppRoutes/>, document.getElementById('app')
)

