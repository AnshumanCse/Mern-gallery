import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  images: [],
  categories: [],
};

export const getAllImages = createAsyncThunk(
  "images/fetchallimages",
  async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/get/images");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllCategories = createAsyncThunk(
  "images/getAllCategories",
  async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/get/categories"
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postCategory = createAsyncThunk(
  "images/postCategory",
  async (payload) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/add/category",payload
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postNewImag = createAsyncThunk(
  "images/postNewImag",
  async (payload) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/upload/image",payload
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getSingleImage = createAsyncThunk(
  "images/getSingleImage",
  async (payload) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/get/singleimage?category=${payload}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const gallerySlice = createSlice({
  name: "galleryslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllImages.fulfilled, (state, action) => {
      state.images = action.payload;
    });

    builder.addCase(getAllCategories.fulfilled,(state,action) => {
        state.categories = action.payload

    });

    builder.addCase(getSingleImage.fulfilled,(state,action) => {
      state.categories = action.payload
    })
  },
});

export default gallerySlice.reducer;
