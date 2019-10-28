import { connect } from 'react-redux';
import Basket from './Basket';
import { deleteItem } from '../../store/actions';

const mapStateToProps = (state) => ({
  basket: state.basket,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
});

const connectedBasket = connect(mapStateToProps, mapDispatchToProps)(Basket);

export {
  connectedBasket as Basket,
};
