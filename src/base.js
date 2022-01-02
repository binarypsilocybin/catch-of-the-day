import Rebase from "re-base";
import firebase from "firebase/compat/app";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyButMWlWLFQQxV3qigIwIpcbPYAY_BC5Do",
    authDomain: "catch-a-fish-33be0.firebaseapp.com",
    databaseURL: "https://catch-a-fish-33be0-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;







