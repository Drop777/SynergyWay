import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Product = ({ item, addToBasket }) => (
  <Card>
    <CardContent>
      <Typography variant="h4" component="h2">
        {item.name}
      </Typography>
      <Typography variant="body1" component="p">
        {item.label}
      </Typography>
      <Typography variant="h6" component="h2">
        Price:
        {item.price}
        $
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" color="primary" onClick={() => addToBasket(item)}>Add</Button>
    </CardActions>
  </Card>
);

Product.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
  }),
  addToBasket: PropTypes.func,
}.isRequaired;

export default Product;
