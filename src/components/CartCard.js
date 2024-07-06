import { useCart } from "../context/CartContext.js";
import "./CartCard.css";

export const CartCard = ({eachCart}) => {

  const { removeCart } = useCart();

  return (
    <div className="cart-items">
      <img title={eachCart.name} src={eachCart.image} alt={eachCart.name} />
      <p className="pName">{eachCart.name}</p>
      <p className="price">&#x20b9; {eachCart.price} <span>x 1</span></p>
      <button onClick={() => removeCart(eachCart)} className="remove">Remove</button>
    </div>
  )
}
