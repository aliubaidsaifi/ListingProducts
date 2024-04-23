import { db } from '../Firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export const addUser = async (userId, userDetails) => {
  await addDoc(collection(db, 'users'), {
    id: userId,
    ...userDetails
  });
};