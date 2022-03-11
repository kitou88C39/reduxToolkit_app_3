import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/AuthProvider";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";

import { createStore, combineReducers, compose } from "redux";

import firebase from "./firebase";
import "firebase/firestore";

import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEqz-K-CIG8soT0e37DmgVfpPJ8rN04QM",
  authDomain: "todo-app-3-caadd.firebaseapp.com",
  projectId: "todo-app-3-caadd",
  storageBucket: "todo-app-3-caadd.appspot.com",
  messagingSenderId: "714177228026",
  appId: "1:714177228026:web:74586cde1c21fa99e1ad43",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </AuthProvider>
        </ReactReduxFirebaseProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
