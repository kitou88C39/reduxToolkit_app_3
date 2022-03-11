import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// import { createStore, combineReducers, compose } from "redux";
// import firebase from "firebase";
// import "firebase/firestore";
// import {
//   reactReduxFirebaseProvider,
//   firebaseReducer,
// } from "react-redux-firebase";
// import { reduxFirestore, firestoreReducer } from "redux-firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBEqz-K-CIG8soT0e37DmgVfpPJ8rN04QM",
//   authDomain: "todo-app-3-caadd.firebaseapp.com",
//   projectId: "todo-app-3-caadd",
//   storageBucket: "todo-app-3-caadd.appspot.com",
//   messagingSenderId: "714177228026",
//   appId: "1:714177228026:web:74586cde1c21fa99e1ad43",
// };

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
// };

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();

// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   firestore: firestoreReducer,
// });

const store = configureStore({
  reducer: reducer,
});
export default store;
