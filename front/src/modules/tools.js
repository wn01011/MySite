import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

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
  initialState: {
    cursor: "normal",
    sideWidth: 200,
    titleImg: "",
    mainView: "AboutMe",
    canScroll: true,
    audioVolume: 1,
    inProject: false,
    mainViewArray: [
      "AboutMe",
      "Projects",
      "Blockchain",
      "Unity",
      "Game",
      "Languages/CSS",
      "Languages/Javascript",
      "Languages/React",
    ],
  },
  reducers: {
    setSideWidth: (state, action) => {
      return { ...state, sideWidth: action.payload };
    },
    setTitleImg: (state, action) => {
      return { ...state, titleImg: action.payload };
    },
    setMainViewArray: (state, action) => {
      if (state.mainViewArray.includes(action.payload)) return state;
      else {
        const tempArray = [...state.mainViewArray];
        tempArray.push(action.payload);
        return { ...state, mainViewArray: tempArray };
      }
    },
    setMainView: (state, action) => {
      return { ...state, mainView: action.payload };
    },
    setCursor: (state, action) => {
      return { ...state, cursor: action.payload };
    },
    setCanScroll: (state, action) => {
      return { ...state, canScroll: action.payload };
    },
    setAudioVolume: (state, action) => {
      return { ...state, audioVolume: action.payload };
    },
    setInProject: (state, action) => {
      return { ...state, inProject: action.payload };
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
