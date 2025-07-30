import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOkGvxcZYR5_99Aimwzi8D2Wm2MlU_bO4",
  authDomain: "itchats-1d993.firebaseapp.com",
  projectId: "itchats-1d993",
  storageBucket: "itchats-1d993.firebasestorage.app",
  messagingSenderId: "905044653718",
  appId: "1:905044653718:web:22e5ee37f313e81ac2b4b7",
  measurementId: "G-6Q1YRJ5Y9T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
