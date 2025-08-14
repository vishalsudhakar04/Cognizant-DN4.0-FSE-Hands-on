import React from 'react';

function Cart(props) {
  // The 'items' prop is expected to be an array of objects
  const { items } = props;

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.itemname}>
            <td>{item.itemname}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;
