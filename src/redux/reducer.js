import { createSlice } from "@reduxjs/toolkit";

//ログインユーザーが自身の口座に入出金する
export const counterSlice = createSlice({
  name: "currentUser",
  initialState: {
    count: 0,
  },
  reducers: {
    increase: (state) => {
      state.count += num;
    },
    decrease: (state) => {
      state.count -= num;
    },
  },
});

const initialState = {
  idCount: 1,
  todos: [{ id: 1, name: "addTodos", money: "balance" }],
};

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
    // updateTodos: (state, action) => {
    //   return {
    //     ...state,
    //     todos: state?.todos?.map((todo) => {
    //       if (todo.id === action.payload.id) {
    //         return {
    //           ...todo,
    //           balance: action.payload.balance,
    //         };
    //       }
    //       return todo;
    //     }),
    // };
    // },
  },
});

export const { increase, decrease } = counterSlice.actions;
export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
