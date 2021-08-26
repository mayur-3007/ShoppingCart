import React, { createContext, useReducer, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import { reducer } from './reducer';
import ContextCart from './ContextCart';

export const CartContext = createContext();

const Cart = ({ cart }) => {
  const classes = useStyles();
  const initialState = {
    item: cart,
    totalAmount: 0,
    totalItem: 0,
  };
  // console.log(initialState, 'INITIALSTATE');

  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: 'CLEAR_CART' });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: 'INCREMENT',
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: 'DECREMENT',
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    // console.log("Awesome");
  }, [state.item]);

  console.log(state, 'STATE');

  if (!cart) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>
        Your Shopping Cart
      </Typography>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </Container>
  );
};

export default Cart;
