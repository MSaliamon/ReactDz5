import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPizzas = createAsyncThunk(
  'menu/fetchPizzas',
  async () => {
    const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  }
);
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
      }
    }
  }
});
export const { addItem, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
