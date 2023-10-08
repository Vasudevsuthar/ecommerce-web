import React, { useState } from "react";
import classes from "./Cart.module.css";

const initialCartElements = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartElements);

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className={classes.cartContainer}>
      <h1 className={classes.cartTitle}>Your Cart</h1>
      {cartItems.map((product) => (
        <div className={classes.cartItem} key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className={classes.itemDetails}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: ${product.price * product.quantity}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove Color</button>
          </div>
        </div>
      ))}
      <div className={classes.cartTotal}>
        <p>Total Price: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
