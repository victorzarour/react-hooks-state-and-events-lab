import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)  

  const listClass = inCart ? "App in-cart" : ""

  function addToCart (){
    setInCart(!inCart)
  }

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
