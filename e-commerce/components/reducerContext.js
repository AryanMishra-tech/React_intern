import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  favorite: [],
  cart: [],
   totalPrice: 0,
};

function productReducer(state, action) {
  switch (action.type) {
      case 'ADD_TO_FAVORITE': {
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    }
    case 'ADD_TO_CART': {
     
      return {
        ...state,
        cart: [...state.cart, action.payload],
        
      };
    }

  
    case 'REMOVE_FROM_FAVORITE': {
      
       return {
        ...state,
        favorite: state.favorite.filter(item => item.id !== action.payload),
      };
    }
    
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        
      };
    }

     
    default: {
       return (state);
    }
  }
}

const ProductContext = createContext(initialState);
export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}