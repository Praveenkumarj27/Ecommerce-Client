import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoRHr2HHkw2ameV1Ugacms2B_1ADeaHKk",
  authDomain: "eccommerce-bdc40.firebaseapp.com",
  projectId: "eccommerce-bdc40",
  storageBucket: "eccommerce-bdc40.appspot.com",
  messagingSenderId: "537804540530",
  appId: "1:537804540530:web:2ce0579c2dae42b76ed0eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Auth Google
export const auth = getAuth(app);
