import { ACTION_TYPES } from './actionTypes';
import { products } from '../api/products';

export const loadData = () => ({
  type: ACTION_TYPES.LOAD_DATA,
  payload: products,
});

export const addToBasket = (item) => ({
  type: ACTION_TYPES.ADD_TO_BASKET,
  payload: {
    ...item,
    amount: 1,
  },
});

export const deleteItem = (id) => ({
  type: ACTION_TYPES.DELETE_ITEM,
  payload: id,
});