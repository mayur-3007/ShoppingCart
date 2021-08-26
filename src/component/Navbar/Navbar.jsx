import React, { useContext } from 'react';
import { CartContext } from '../Cart/Cart';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position='fixed' className={classes.AppBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            Shopping
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show cart items'
                color='inherit'
              >
                <ShoppingCart />
                {/* <Badge badgeContent='' color='secondary'>
                  <ShoppingCart />
                </Badge> */}
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
