import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};