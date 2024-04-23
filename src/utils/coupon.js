import firebase from '../firebase/firebaseConfig';

export const applyCoupon = async (couponCode) => {
  const couponRef = firebase.firestore().collection('coupons').doc(couponCode);
  const doc = await couponRef.get();
  if (doc.exists && new Date(doc.data().expirationDate.toDate()) > new Date()) {
    return doc.data().discountValue;
  } else {
    throw new Error('Invalid or expired coupon');
  }
};