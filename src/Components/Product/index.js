import { connect } from 'react-redux';
import { addToBasket } from '../../store/actions';
import Products from './Product';

const mapDispatchToProps = (dispatch) => ({
  addToBasket: (item) => dispatch(addToBasket(item)),
});

const connectedProducts = connect(null, mapDispatchToProps)(Products);

export {
  connectedProducts as Product,
};
