import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { getTransactionsForUser } from '../Firebase/firebase-config';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactionsForUser(/* user id */);
      setTransactions(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="transactions">
        {transactions.map((transaction, index) => (
          <div key={index}>
            <p>Product Name: {transaction.productName}</p>
            <p>Amount Paid: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
