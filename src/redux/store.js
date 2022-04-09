import { configureStore } from "@reduxjs/toolkit";
// some function
import { reducer } from "./reducer";

const store = configureStore({
  //reducer: { senderReducer, reducer },
  // some function
  reducer: {
    senders: reducer,
    todos: reducer,
  },
});
export default store;
