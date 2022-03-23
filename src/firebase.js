import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEqz-K-CIG8soT0e37DmgVfpPJ8rN04QM",
  authDomain: "todo-app-3-caadd.firebaseapp.com",
  projectId: "todo-app-3-caadd",
  storageBucket: "todo-app-3-caadd.appspot.com",
  messagingSenderId: "714177228026",
  appId: "1:714177228026:web:74586cde1c21fa99e1ad43",
  //measurementId: "KNuZBcE97m1r5lreDcSi",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
//export const firestore = getFirestore(firebaseApp);

// initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const db = getFirestore();
// export const colRef = collection(db, "senders");
// getDocs(colRef).then((shapshot) => {
//   const senders = [];
//   snapshot.docs.forEach((doc) => {
//     book.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(books)
// });
//   .catch(err => {
//     console.log(err.messate)
// });
