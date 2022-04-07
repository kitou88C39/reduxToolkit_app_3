//import { updateCurrentUser } from "@firebase/auth";
//import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  senders: [],
};

//追加したコード①
// export const senderSlice = createSlice({
//   name: "senders",
//   initialState,
//   count: 0,
//   reducers: {
//     increment: (state, { payload }) => {
//       state.count = payload;
//     },
//     decrement: (state, { payload }) => {
//       state.count = payload;
//     },
// incrementByAmount: (state, action) => {
//   state.value += action.payload;
// },
//   },
// });
//追加したコード②
// const initialStateValues = {
//   senders: [],
//   count: 0,
// };
// export const senderSlice = createSlice({
//   name: "senders",
//   initialState: initialStateValues,
//   count: 0,
//   reducers: {
//     increment: (state) => {
//       state.count += Number;
//     },
//     decrement: (state) => {
//       state.count -= Number;
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload;
//     },
//     decrementByAmount: (state, action) => {
//       state.count -= action.payload;
//     },
//   },
// });
//追加したコード③
// export const senderSlice = createSlice({
//   name: "senders",
//   initialState: {
//     count: 0,
//   },
//   reducers: {
//     increment: (state, action) => {
//       state.count += Number;
//       //state.count++;
//     },
//     decrement: (state, action) => {
//       state.count -= Number;
//       //state.count--;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });
//追加したコード④  // some function
export const senderSlice = createSlice({
  name: "senders",
  initialState: {
    count: 0,
  },
  reducers: {
    setCount: (state, action) => {
      //console.log("action", action);
      //state.count = action.payload;
      return {
        ...state,
        senders: [...state.senders, action.payload],
      };
    },
    updateCount: (state, action) => {
      return {
        ...state,
        senders: state?.senders?.map((count) => {
          if (count.id === action.payload.id) {
            return {
              ...count,
              count: action.payload.count,
            };
          }
          return count;
        }),
      };
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
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  senderSlice.actions;
export default senderSlice.reducer;

export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
