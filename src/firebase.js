import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBr4_7QE4aLPNYlcoK1DLlOyw4NirsY3Fo",
  authDomain: "visioproject-41e1f.firebaseapp.com",
  projectId: "visioproject-41e1f",
  storageBucket: "visioproject-41e1f.appspot.com",
  messagingSenderId: "943774382152",
  appId: "1:943774382152:web:14daa86d0fb544c652407d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const firestore = getFirestore(app)
export default app;