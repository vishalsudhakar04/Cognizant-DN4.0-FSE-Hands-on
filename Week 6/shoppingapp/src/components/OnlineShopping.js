import React from 'react';
import Cart from './Cart';

function OnlineShopping() {
  // This is the data we will pass down to the Cart component
  const cartInfo = [
    { itemname: "Laptop", price: 80000 },
    { itemname: "TV", price: 120000 },
    { itemname: "Washing Machine", price: 50000 },
    { itemname: "Mobile", price: 30000 },
    { itemname: "Fridge", price: 70000 }
  ];

  return (
    <div className="shopping-container">
      <h1>Items Ordered :</h1>
      <Cart items={cartInfo} />
    </div>
  );
}

export default OnlineShopping;