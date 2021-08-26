import React, { useContext } from 'react';
import { CartContext } from '../Cart';
import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ id, item_name, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={img} alt={img} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant='h4'>{item_name}</Typography>
        <Typography variant='h5'>{price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small' onClick={() => decrement(id)}>
            -
          </Button>
          <Typography>{quantity}</Typography>
          <Button type='button' size='small' onClick={() => increment(id)}>
            +
          </Button>
        </div>
        <Button
          variant='contained'
          type='button'
          color='secondary'
          onClick={() => removeItem(id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
