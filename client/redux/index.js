import axios from "axios";

// action type
const RECEIVED_PRODUCTS = "RECEIVED_PRODUCTS";

// action creator
const receivedProducts = (products) => {
    return {
        type: RECEIVED_PRODUCTS,
        products,
    }
};

// Thunk Creator
export const fetchCreditors = () => {
    return async (dispatch) => {
        try {
            const { data: products } = await axios.get("/api/products");
            dispatch(receivedProducts(products));
        } catch (error) {
          console.error("Error fetching data from api");
          console.error(error);  
        }    
    };
};

// products reducer
const initialState = {
    creditors = [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.types) {
        case RECEIVED_PRODUCTS:
            return {...state, creditors: action.creditors};
        default:
            return state;    
    }
};

export default rootReducer;