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
const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    pizzas: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default menuSlice.reducer;