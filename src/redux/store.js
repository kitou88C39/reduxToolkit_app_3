import { configureStore } from "@reduxjs/toolkit";
//import { reducer } from "./reducer";
// some function
import { reducer, senderSlice } from "./reducer";

const store = configureStore({
  //reducer: { reducer },
  // some function
  reducer: { reducer, sender: senderSlice.reducer },
});
export default store;
