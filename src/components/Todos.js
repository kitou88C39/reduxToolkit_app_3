import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { Box, TextField, Button } from "@mui/material";
import { AuthContext } from "../auth/AuthProvider";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { db } from "../firebase";
import {
  //doc,
  onSnapshot,
  collection,
  query,
  where,
  //getDocs,
  //data,
  //onSnapshot,
} from "firebase/firestore";
//import { collection } from "firebase/firestore";
//import { database } from "../firebase";

//import { firestore } from "../firebase";
//import { collection, getDocs } from "firebase/firestore";
//import { addDoc, collection } from "firebase/firestore";
//import { doc, onSnapshot } from "firebase/firestore";
//import { getFirestore, collection } from "firebase/firestore";
//import { getDoc, addDoc, updateDoc } from "firebase/firestore";
//import { getDocument, getCollection } from "~/plugins/firebase";

const mapStateToProps = (state) => {
  return {
    todos: state?.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const { count, setCount } = props;
  const [todo, setTodo] = useState("");
  // Contextからログインユーザを取得
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const [num, setNum] = useState(100);

  const onCountUp = () => {
    setCount(count + num);
  };

  const onCountDown = () => {
    setCount(count - num);
  };

  //追加したコード①
  const firestore = useFirestore();
  useEffect(() => {
    //const q = query(collection(db, "senders"), where("currentUser", "==", "0"));
    const q = query(collection(db, "senders"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("data", data);
      });
      return unsub;
    });
  });
  //追加したコード②

  // useEffect(() => {
  //   console.log(("show db", db));
  //   collection(db, "senders");

  //   console
  //     .log("senders", db)
  //     .orderBy("displayName", "completed", "count")
  //     .onSnapshot((snapshot) =>
  //       setCount(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           senders: doc.data(),
  //         }))
  //       )
  //     );
  // });

  //追加したコード③
  // try {
  //   const docRef = await addDoc(collection(db, "senders"), {
  //     displayName: "currentUser",
  //     completed: "false",
  //     count: 0,
  //   });
  //   console.log("KNuZBcE97m1r5lreDcSi ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  //追加したコード④
  // useEffect(() => {
  //   console.log(("show db", db));
  //   collection(db, "senders")
  //     .add({
  //       displayName: "currentUser",
  //       completed: "false",
  //       count: 0,
  //     })
  //     .then(function (docRef) {
  //       console.log("KNuZBcE97m1r5lreDcSi", docRef.id);
  //     })
  //     .catch(function (error) {
  //       console.error("Error adding document: ", error);
  //     });
  // });
  //追加したコード⑤

  // async function sample() {
  //   // add
  //   await addDoc(getCollection < IPost > "posts", {
  //     title: "Camecon始めよう！",
  //   });
  //   // read
  //   const document = getDocument < IPost > "posts/1";
  //   const snapshot = await getDoc(document);
  //   // update
  //   await updateDoc(document, { title: "https://camecon.me" });
  // }
  //追加したコード⑥
  //const [senders, setSenders] = useState([]);

  // useEffect(() => {
  //   const usersCollectionRef = collection(db, "senders");
  //   console.log(usersCollectionRef);
  // }, []);
  // useEffect(() => {
  //   const userDocumentRef = doc(db, "senders", "KNuZBcE97m1r5lreDcSi ");
  //   const unsub = onSnapshot(userDocumentRef, (documentSnapshot) => {
  //     console.log(documentSnapshot.data());
  //   });
  //   return unsub;
  // }, []);

  //追加したコード⑦
  // useEffect(() => {
  //   const usersCollectionRef = collection(db, "senders");
  //   getDocs(usersCollectionRef).then((querySnapshot) => {
  //     setSenders(querySnapshot.docs.map((doc) => doc.data()));
  //     querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   });
  // }, []);
  //追加したコード⑧
  // const firestore = useFirestore();
  // useEffect(() => {
  //   //console.log(("show db", db));
  //   const q = query(collection(db, "senders"), where("currentUser", "==", "0"));
  //   //console.log(("show db", db));
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     //console.log(("show data", data));
  //     querySnapshot.forEach((doc) => doc.data());
  //   });
  //   return unsub;
  // }, []);

  //追加したコード⑨
  // const q = query(collection(db, "senders"), where("currentUser", "==", "0"));
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   const senders = [];
  //   querySnapshot.forEach((doc) => {
  //     senders.push(doc.data().name);
  //   });
  //   console.log("show db", senders.join(", "));
  // });

  //追加したコード⑩
  // const firestore = useFirestore();
  // useEffect(() => {
  //   console.log(("show db", db));
  //   const countData = collection(db, "senders");
  //   getDocs(countData).then((snapshot) => {
  //     console.log(snapshot.doc.forEach((doc) => doc.data()));
  //   });
  // }, []);
  //追加したコード⑪
  // const firestore = useFirestore();
  // console.log(("show db", db));
  // const onCountUp = () => {
  //   setCount(count + num);
  //   return firestore.add("senders", {
  //     idCount: 1,
  //     displayName: currentUser,
  //     completed: false,
  //     count: 0,
  //   });
  // };
  // const onCountDown = () => {
  //   setCount(count - num);
  //   return firestore.add("senders", {
  //     idCount: 1,
  //     displayName: currentUser,
  //     completed: false,
  //     count: 0,
  //   });
  // };
  // useFirestoreConnect({
  //   collection: "senders",
  //   doc: "KNuZBcE97m1r5lreDcSi",
  //   where: [["currentUser", "==", "0"]],
  // });

  //const firestore = useFirestore();

  const addTodo = () => {
    return firestore.add("addTodo", {
      idCount: 1,
      item: todo,
      completed: false,
      balance: 0,
    });
  };
  useFirestoreConnect({
    collection: "addTodo",
    where: [["todo", "==", "0"]],
  });

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
        balance: 0,
      });
      setTodo("");
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className="balance-list">
          <h2>
            {currentUser?.displayName ?? "未ログイン"}
            さんの残高 : {count} 円{" "}
          </h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="入出金額"
              variant="outlined"
              value={num}
              onChange={(e) => setNum(Number(e.target.value))}
            />
          </Box>
          <Button onClick={onCountUp} variant="outlined" color="primary">
            Increment
          </Button>
          <Button onClick={onCountDown} variant="outlined" color="secondary">
            Decrement
          </Button>
        </div>
        <div className="addTodos">
          <h2>受取人一覧</h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="受取人を入力してください"
              variant="outlined"
              type="text"
              onChange={(e) => handleChange(e)}
              className="todo-input"
              value={todo}
            />
          </Box>
          <Button
            variant="outlined"
            color="primary"
            className="add-btn"
            onClick={() => add()}
          >
            受取人追加
          </Button>
          <br />
          <h2>受取人名</h2>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
