import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { PayPalScriptProvider } from "@paypal/react-paypal-js";


// Import your screens
import Dashboard from './Screens/Dashboard';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ProductListing from './Screens/ProductListing';



const App = () => {
  return (
    // <PayPalScriptProvider options={paypalOptions}>
      <Router>
          <Dashboard />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    //</PayPalScriptProvider>
  );
}

export default App;
