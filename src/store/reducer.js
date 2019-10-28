import { ACTION_TYPES } from './actionTypes';

const initialState = localStorage['redux-store']
  ? JSON.parse(localStorage['redux-store'])
  : {
    products: [],
    basket: [],
    itemsInBasket: 0,
  };


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_DATA:
      return {
        ...state,
        products: [...action.payload],
      };
    case ACTION_TYPES.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket].find((item) => item.id === action.payload.id)
          ? [...state.basket].map((item) => {
            if (item.id === action.payload.id) {
              // eslint-disable-next-line no-return-assign
              return {
                ...item,
                amount: item.amount += 1,
              };
            }
            return item;
          })
          : [...state.basket, action.payload],
      };
    case ACTION_TYPES.DELETE_ITEM:
      return {
        ...state,
        basket: [...state.basket].filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
