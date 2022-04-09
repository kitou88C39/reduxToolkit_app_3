import { configureStore } from "@reduxjs/toolkit";
// some function
import { senderReducer, reducer } from "./reducer";

const store = configureStore({
  //reducer: { senderReducer, reducer },
  // some function
  senders: senderReducer,
  todos: reducer,
});
export default store;
