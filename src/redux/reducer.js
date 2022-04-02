import { updateCurrentUser } from "@firebase/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  senders: [],
};
// export const userSlice = createSlice({
//   name: "senders",
//   initialState: {
//     count: 0,
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },
// });
//追加したコード①
// const senderReducer = createSlice({
//   name: "senders",
//   initialState,
//   count: 0,
//   reducers: {
//     increment: (state) => {
//       state.value++;
//     },
//     decrement: (state) => {
//       state.value--;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });
//追加したコード②
// const senderSlice = createSlice({
//   name: "currentUser",
//   initialState,
//   count: 0,
//   reducers: {
//     increment(state) {
//       state.value++;
//     },
//     decrement(state) {
//       state.value--;
//     },
// incrementByAmount(state, action) {
//   state.value += action.payload;
// },
//   },
// });
//追加したコード③
export const counterSlice = createSlice({
  name: "senders",
  initialState: {
    count: 0,
  },
  reducers: {
    Increment: (state) => {
      state.count += Number;
    },
    Decrement: (state) => {
      state.count -= Number;
    },
  },
});

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  balance: 0,
  reducers: {
    //ここでは、reducerを書きます。
    //todoを追加
    addTodos: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    //todoを削除
    removeTodos: (state, action) => {
      return {
        ...state,
        todos: state?.todos?.filter((item) => item.id !== action.payload),
      };
    },
    //todoを更新
    updateTodos: (state, action) => {
      return {
        ...state,
        todos: state?.todos?.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              balance: action.payload.balance,
            };
          }
          return todo;
        }),
      };
    },
  },
});
//export const { login, logout } = userSlice.actions;
//export const selectUser = (state) => state.user.user;
//export default userSlice.reducer;
//追加したコード①
//export const { increment, decrement } = senderReducer.actions;
//export const reducer = senderReducer.reducer;

//追加したコード②
//export const { increment, decrement } = senderSlice.actions;
//export default senderSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;

export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
