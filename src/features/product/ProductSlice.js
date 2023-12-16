import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./ProductAPI";
import { fetchAllProducts, fetchProductsByFilter } from "./ProductAPI";

const initialState = {
  products: [],
  status: "idle",
};

// making a fetch request to the API server in the productAPI file and updating the state slice
// in here. we took the data from dummy json and used json-server which simulates
// a RESTful API using a JSON file as the data source. to create a mock API

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    //console.log(response);
    return response.data;
  }
);

export const fetchProductsByfilterAsync = createAsyncThunk(
  "product/fetchProductsByfilter",
  async (filter) => {
    const response = await fetchProductsByFilter(filter);
    // The value we return becomes the `fulfilled` action payload
    //console.log(response);
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByfilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByfilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  productListSlice.actions;

//selector that is used in useSelector
export const selectProducts = (state) => state.product.products;

export default productListSlice.reducer;
