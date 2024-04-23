import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOSUBGqIgvw3YL0K47q0K6IGdkUjSaU50",
    authDomain: "myapp-f0c3b.firebaseapp.com",
    projectId: "myapp-f0c3b",
    storageBucket: "myapp-f0c3b.appspot.com",
    messagingSenderId: "1034013188229",
    appId: "1:1034013188229:web:6c1a89e4dccb642fd889ec",
    measurementId: "G-2CY9Q0XZLP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to get transactions for a specific user
const getTransactionsForUser = async (userId) => {
  const transactionsRef = collection(db, "transactions"); 
  const q = query(transactionsRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

export { auth, db, getTransactionsForUser };
