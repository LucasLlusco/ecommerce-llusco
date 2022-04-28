import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyArgGRYfCEtXQUswYJR6XzT5Dye3Qxoqcg",
  authDomain: "ecommerce-lucasllusco.firebaseapp.com",
  projectId: "ecommerce-lucasllusco",
  storageBucket: "ecommerce-lucasllusco.appspot.com",
  messagingSenderId: "451894816191",
  appId: "1:451894816191:web:3610218b136c8b406e450a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app) 


