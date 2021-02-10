import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfkv1GzKNaxMARKpFlIraxOuYLN_MNAu8",
  authDomain: "filings-online-consultation.firebaseapp.com",
  projectId: "filings-online-consultation",
  storageBucket: "filings-online-consultation.appspot.com",
  messagingSenderId: "929032770080",
  appId: "1:929032770080:web:becc51fd4f515950812245",
  measurementId: "G-WRPJRKMFV6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
