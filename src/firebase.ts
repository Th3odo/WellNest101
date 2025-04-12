import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "wellnest-d0723",
  storageBucket: "wellnest-d0723.firebasestorage.app",
  messagingSenderId: "977428306043",
  appId: "1:977428306043:web:88b8e5b45986f5dec4eade"
};;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
