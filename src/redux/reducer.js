import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  value: 0,
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
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  count: 0,
  reducers: {
    increment: (state) => {
      state.value += Number;
    },
    decrement: (state) => {
      state.value -= Number;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
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
export const { evenCalculator } = counterSlice.actions;
export default counterSlice.reducer;
export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
