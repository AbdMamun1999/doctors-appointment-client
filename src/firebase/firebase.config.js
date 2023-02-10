import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: "AIzaSyB4pOK5ccHIMmZwDVMywUzKyDXwNFd1nRQ",
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB4pOK5ccHIMmZwDVMywUzKyDXwNFd1nRQ",
  authDomain: "doctors-appointment-ba157.firebaseapp.com",
  projectId: "doctors-appointment-ba157",
  storageBucket: "doctors-appointment-ba157.appspot.com",
  messagingSenderId: "904292766334",
  appId: "1:904292766334:web:3811e3bf511834a0cefe2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
