// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducer";

// const store = configureStore({
//   //reducer: { senderReducer, reducer },
//   reducer: {
//     senders: reducer,
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
