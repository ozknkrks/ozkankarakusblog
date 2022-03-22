import React, { useState } from "react";
import firebase from "firebase";
function Fetch() {
  const [allDocs, setAllDocs] = useState([]);
  const [SingleDoc, setSingleDoc] = useState({});

  const db = firebase.firestore();
  function fetchSingle(e) {
    e.preventDefault();
    db.collection("posts")
      .doc("31iaUrHGzXZWnOj5g2GJ")
      .get()
      .then((snapshot) => {
        if (snapshot) {
          setSingleDoc(snapshot.data());
        }
      });
    console.log(SingleDoc);
  }

  return (
    <div>
      <span>sa</span>
      <button onClick={fetchSingle()}>çek</button>
    </div>
  );
}

export default Fetch;
