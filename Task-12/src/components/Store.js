import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import './Style.css';

const Store = () => {
  const {
    state: { product },
  } = CartState();

  
  return (
    <div className="store">
      <div className="productContainer">
        {product.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Store;
