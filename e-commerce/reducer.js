import React, { useReducer } from 'react';
import {initialState} from '../components/reducerContext';

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
      return(state);
    }
  }
}

export default function TaskApp() {
  const [state, dispatch] = useReducer(productReducer, initialState);

  function handleAddToFavorite(item) {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: item,
    });
  }

  function handleAddToCart(item) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  }

  function handleRemoveFromCart(itemId) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    });
  }

  function handleRemoveFromFavorite(itemId) {
    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: itemId,
    });
  }

  return (
    <div>
      {/* Your components go here. Example usage: */}
      <Add onAddToFavorite={handleAddToFavorite} onAddToCart={handleAddToCart} />
      <TaskList
        favorite={state.favorite}
        cart={state.cart}
        onRemoveFromFavorite={handleRemoveFromFavorite}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

// Assuming you have the Add and TaskList components
function Add({ onAddToFavorite, onAddToCart }) {
  const [item, setItem] = React.useState({ id: '', name: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddToFavorite = () => {
    onAddToFavorite(item);
  };

  const handleAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <div>
      <input name="id" value={item.id} onChange={handleInputChange} placeholder="Item ID" />
      <input name="name" value={item.name} onChange={handleInputChange} placeholder="Item Name" />
      <button onClick={handleAddToFavorite}>Add to Favorite</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

function TaskList({ favorite, cart, onRemoveFromFavorite, onRemoveFromCart }) {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorite.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onRemoveFromFavorite(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>

    );
}