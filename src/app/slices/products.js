import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const user = JSON.parse(sessionStorage?.getItem('persist:user'))?.userInfo;
const currentUser = user && JSON.parse(user);
const TOKEN = currentUser?.token;

//fetchProducts
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('http://localhost:8080/api/products/', {
        method: 'GET',
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      const data = await response.json();
      return data.products;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// deleteProduct
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:8080/api/products/${_id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      return _id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// updateProduct
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (values, { rejectWithValue }) => {
    // const { _id} = values;
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/${values._id}`,
        {
          method: 'PUT',
          headers: { Authorization: `Bearer ${TOKEN}` },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      return data.user;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
// insertProduct
export const insertProduct = createAsyncThunk(
  'products/insertProduct',
  async (product, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/`,{
        method: 'POST',
        headers: { Authorization: `Bearer ${TOKEN}` },
        body: JSON.stringify(product),
        }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: null,
    error: null,
  },
  extraReducers: {
    // get all products
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // deleteProducts
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products.splice(
        state.products.findIndex(
          (product) => product._id === action.payload._id
        ),
        1
      );
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get all products
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products[state.products.findIndex(product => product._id === action.payload._id)] = action.meta.arg;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // insert new Product
    [insertProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [insertProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products.push(action.payload)
    },
    [insertProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
