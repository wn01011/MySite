import { configureStore } from "@reduxjs/toolkit";
import { reducer as toolsReducer } from "./tools";

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
  },
});

export default store;
