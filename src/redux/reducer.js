import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
