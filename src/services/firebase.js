import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW6kou6yXcPW3AA47DF07mP2LxJJ-eKHA",
  authDomain: "vmo-web-ad846.firebaseapp.com",
  projectId: "vmo-web-ad846",
  storageBucket: "vmo-web-ad846.appspot.com",
  messagingSenderId: "432472965919",
  appId: "1:432472965919:web:ca06f3147719cb38cc262a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
