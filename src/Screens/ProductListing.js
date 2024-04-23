import React from 'react';
import Product from '../Components/Product';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { auth, db } from '../Firebase/firebase-config'; // Import auth and db directly if your config file exports them as named exports

const paypalOptions = {
  "client-id": "AUf6Jh8viomIa90m8KMFndz2iIwKkIcpzZHTUmKY1f8M9J7uDeQ1zO7d-lTb85AU4oiBHBlb2mBZ9g9_",
  currency: "USD",
  intent: "capture"
};

const products = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: '59.99',
    imageUrl: 'https://example.com/images/product1.jpg',
    description: 'High-quality wireless headphones with noise cancellation and up to 40 hours of battery life.'
  },
  {
    id: '2',
    name: 'Compact Digital Camera',
    price: '145.50',
    imageUrl: 'https://example.com/images/product2.jpg',
    description: '12.1 Megapixel digital camera with 4X optical zoom, face detection and a 2.7-inch LCD screen.'
  },
  {
    id: '3',
    name: 'Smartwatch',
    price: '199.99',
    imageUrl: 'https://example.com/images/product3.jpg',
    description: 'Stay connected with notifications for calls, texts, apps with a battery life up to 10 days.'
  }
];

const ProductListing = () => {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <h1 className="text-xl ml-40 font-bold">Our Product List</h1>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <div key={product.id} style={{ width: '300px', margin: '10px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <Product
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
            />
            <PayPalButtons
              style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay' }}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: { value: product.price.replace(/[^0-9.-]+/g,"") }
                  }],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(details => {
                  const user = auth.currentUser;
                  if (user) {
                    db.collection('transactions').add({
                      userId: user.uid,
                      productId: product.id,
                      amount: product.price,
                      timestamp: new Date()
                    }).then(() => {
                      console.log('Transaction recorded');
                    }).catch(error => {
                      console.error('Error recording transaction:', error);
                    });
                  } else {
                    console.error('User not logged in');
                  }
                  console.log('Payment for', product.name, 'successful!');
                });
              }}
            />
          </div>
        ))}
      </div>
    </PayPalScriptProvider>
  );
};

export default ProductListing;
