import "./ProductCard.css";
import { useCart } from "../context/CartContext.js";
import { useEffect, useState } from "react";

export const ProductCard = ({eachProd}) => {

  const { id, name, image, price } = eachProd;
  const { add, removeCart, cartList } = useCart();
  const [addbutton, setAddbutton] = useState(false);

  useEffect(() => {
    const finder = cartList.find(item => item.id === id);

    if(finder){
      setAddbutton(true);
    } else{
      setAddbutton(false);
    }
  },[cartList, id]);

  return (
    <div className="card">
      
      <div className="photo">
        <img src={image} alt={name} />
      </div>

      <div className="name-price">
        <p>{name}</p>
      </div>

      <div className="add">
        <p>&#x20b9; {price}</p>
        {
          addbutton ? (<button className="remove" onClick={() => removeCart(eachProd)}>Remove</button>)
                    :
                      (<button onClick={() => add(eachProd)}>Add Cart</button>)
        }
      </div>
    
    </div>
  )
}
