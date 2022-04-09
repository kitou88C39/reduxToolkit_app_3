import { configureStore } from "@reduxjs/toolkit";
// some function
import { senderReducer, reducer } from "./reducer";

const store = configureStore({
  // some function
  reducer: { senderReducer, reducer },
});
export default store;
