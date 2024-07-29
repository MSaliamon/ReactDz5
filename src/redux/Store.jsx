import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import menuReducer from './MenuSlice';
import orderReducer from './OrderSlice'; 
const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    order: orderReducer,
  },
});

export default store;