import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const setTitleImgThunk = createAsyncThunk(
  "/tools/setTitleImgThunk",
  async (imgName) => {
    const curPromise = () =>
      new Promise((resolve, reject) => {
        resolve(imgName);
      });
    const data = await curPromise();
    return data;
  }
);

const toolsSlice = createSlice({
  name: "tools",
  initialState: { sideWidth: 200, titleImg: "" },
  reducers: {
    setSideWidth: (state, action) => {
      return { ...state, sideWidth: action.payload };
    },
    setTitleImg: (state, action) => {
      return { ...state, titleImg: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTitleImgThunk.pending, (state, action) => {})
      .addCase(setTitleImgThunk.fulfilled, (state, action) => {
        console.log(action);
        return { ...state, titleImg: action.payload };
      })
      .addCase(setTitleImgThunk.rejected, (state, action) => {
        console.log("setTitleImgThunk reject");
      });
  },
});

export const action = toolsSlice.actions;
export const reducer = toolsSlice.reducer;
