import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCTS,
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_ALL_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    // case SET_CURRENT_PRODUCT:
    //   console.log(action);
    //   return {
    //     ...state, currentProduct: action.product
    //   };

    // case REMOVE_PRODUCT:
    //   return {
    //     ...state,
    //     products: state.products.filter((post) => {
    //       return post._id !== action._id;
    //     })
    //   };
    case UPDATE_PRODUCTS:
      console.log('UPDATE ACTION', action);
      return {
        ...state,
        products: [...action.products],
        loading: false
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    currentProduct: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    cart: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
