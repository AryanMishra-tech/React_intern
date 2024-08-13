
import { createContext, useReducer } from "react";
import { productReducer } from "../components/reducerContext";
const initialState = {
  favorites: [],
  cart:[],
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};