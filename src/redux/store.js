import { configureStore } from "@reduxjs/toolkit";
//import { reducer } from "./reducer";
// some function
import { senderReducer, reducer } from "./reducer";

const store = configureStore({
  reducer: { senderReducer, reducer },
  // some function
  //reducer: { reducer, sender: senderSlice.reducer },
});
export default store;
