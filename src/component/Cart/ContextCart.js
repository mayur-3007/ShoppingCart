import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './Cart';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const classes = useStyles();
  if (item.length === 0) {
    return (
      <>
        <Typography variant='subtitle1'>
          You have no items in your shopping cart,
          <Link to='/' className={classes.link}>
            start adding some !
          </Link>
        </Typography>
      </>
    );
  }

  return (
    <>
      <section className='main-cart-section'>
        <p className='total-items'>
          you have <span className='total-items-count'>{totalItem} </span> items
          in shopping cart
        </p>

        <Grid container spacing={3}>
          {item.map((curItem) => (
            <Grid item xs={12} sm={4}>
              <CartItem key={curItem.id} {...curItem} />
            </Grid>
          ))}
        </Grid>

        <div className={classes.cardDetails}>
          <Typography variant='h4'>Subtotal : {totalAmount}</Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size='large'
              type='button'
              variant='contained'
              color='secondary'
              onClick={clearCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size='large'
              type='button'
              variant='contained'
              color='primary'
            >
              Checkout
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
