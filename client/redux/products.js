import axios from "axios";

// action type
const SET_PRODUCTS = "SET_PRODUCTS";

// action creator
export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products,
    }
};

// Thunk Creator
export const fetchProducts = () => {
    console.log("Inside of thunk");
    return async (dispatch) => {
        try {
            const { data: products } = await axios.get("/api/products");
            console.log("got data back from the server");
            dispatch(setProducts(products));
        } catch (error) {
          console.error("Error fetching data from api");
          console.error(error);  
        }    
    };
};

// products reducer
const initialState = {
    products: [],
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS: 
            return { ...state, products: action.products};
           
        default: 
            return state; 
              
    }
};

