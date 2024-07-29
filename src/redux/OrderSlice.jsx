import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchOrderById = createAsyncThunk(
  'order/fetchOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${orderId}`);
      const data = await response.json();
      if (data.status === 'success') {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateOrderPriority = createAsyncThunk(
  'order/updateOrderPriority',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priority: true }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      if (data.status === 'success') {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.order = action.payload;
        state.error = null;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.order = null;
        state.error = action.payload || 'Failed to fetch order';
      })
      .addCase(updateOrderPriority.fulfilled, (state, action) => {
        state.order = action.payload;
        state.error = null;
      })
      .addCase(updateOrderPriority.rejected, (state, action) => {
        state.error = action.payload || 'Failed to update priority';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.payload || 'Failed to create order';
      });
  },
});
export default orderSlice.reducer;