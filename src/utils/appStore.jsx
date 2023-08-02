import { configureStore } from "@reduxjs/toolkit";
import totalCountReducer from "./totalCountSlice";

const appStore = configureStore({
  reducer: {
    totalOperation: totalCountReducer,
  },
});

export default appStore;
