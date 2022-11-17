import {createContext, useReducer} from 'react';
import {reducer} from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: ''
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addtoBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item});
  }

  value.removeFromBasket = (mainId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {mainId: mainId}});
  }

  value.incQuantity = (mainId) => {
    dispatch({type: 'INCREMENT_QUANTITY', payload: {mainId: mainId}});
  }

  value.decQuantity = (mainId) => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: {mainId: mainId}});
  }

  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET'});
  }

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  }
  
  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data});
  }
  

  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
};