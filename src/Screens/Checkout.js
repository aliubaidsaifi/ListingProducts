
import React, { useState } from 'react';
import { getCouponDetails } from '../firebase/database';

const Checkout = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = async () => {
    const details = await getCouponDetails(couponCode);
    if (details && details.expirationDate.toDate() > new Date()) {
      setDiscount(details.discountValue);
    } else {
      alert('Invalid or expired coupon');
    }
  };

  return (
    <div>
      {/* Other checkout elements */}
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={applyCoupon}>Apply Coupon</button>
      {discount > 0 && <p>Discount applied: {discount}</p>}
    </div>
  );
};

export default Checkout;
