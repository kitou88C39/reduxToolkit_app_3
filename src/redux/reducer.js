//import { async } from "@firebase/util";
//import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
//import { db } from "../firebase";
//const firestore = useFirestore();

//const add = () => {
//return firestore.add("addTodo", {
//idCount: 1,
//item: todo,
//completed: false,
//balance: 0,
//});
//useFirestoreConnect({
//collection: "addTodo",
//where: [["todo", "false", "0"]],
//});

const initialState = {
  todos: [],
  //idCount: 1,
  //Receiver: [{ id: "", name: "", money: "" }],
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

export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
