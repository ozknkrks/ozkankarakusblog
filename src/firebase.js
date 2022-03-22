import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANANliU5m7gDFLqvg7P8NFOvVTIcTjs9U",
  authDomain: "ozkankarakus-b83ab.firebaseapp.com",
  projectId: "ozkankarakus-b83ab",
  storageBucket: "ozkankarakus-b83ab.appspot.com",
  messagingSenderId: "628344489368",
  appId: "1:628344489368:web:a92f14ecb3e03fd8aa17ed",
  measurementId: "G-ZJSYDHL46X",
};
const app = initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();
//const auth = firebase.auth();
//const storage = firebase.storage();

export const db = getFirestore(app);
//export { db, auth, storage };
//export default firebaseConfig;
