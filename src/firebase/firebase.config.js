import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAveK37qd6RCQgBLgTuygxY9KQok_se6nw",
  authDomain: "simple-firebase-6ea6b.firebaseapp.com",
  projectId: "simple-firebase-6ea6b",
  storageBucket: "simple-firebase-6ea6b.appspot.com",
  messagingSenderId: "456895895603",
  appId: "1:456895895603:web:8bd085ac3b96aacbed2b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;