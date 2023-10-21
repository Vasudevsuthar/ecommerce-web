import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const product = [
    {
      id: 1,
      title: "Album",
      price: 12.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      qty: 0,
    },
    {
      id: 2,
      title: "Album 2",
      price: 14.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Album 3",
      price: 9.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Album 4",
      price: 19.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: 5,
      title: "T-Shirt",
      price: 19.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    },
    {
      id: 6,
      title: "T-Shirt",
      price: 6.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    product: product,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
