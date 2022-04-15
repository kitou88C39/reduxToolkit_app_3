// import { configureStore } from "@reduxjs/toolkit";
// // some function
// import { reducer } from "./reducer";

// const store = configureStore({
//   //reducer: { senderReducer, reducer },
//   // some function
//   reducer: {
//     //senders: reducer,
//     todos: reducer,
//   },
// });
// export default store;

//実装前
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: reducer,
});
export default store;
