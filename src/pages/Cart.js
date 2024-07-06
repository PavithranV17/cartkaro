import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  useTitle("Cart");
  const { total, cartList } = useCart();

  const mainStyle = {
    maxWidth: "1110px",
    margin: "auto",
  }

  const divStyle ={
    minHeight: "100vh",
  }

  return (
    <main style={mainStyle}>
      <div style={divStyle}>
        <p style={{padding: "15px", textAlign: "center", fontSize: "20px", fontWeight: "600", margin: "10px 0"}}>
          Cart: {cartList.length} | Total: &#x20b9; {total}
        </p>
        {
          cartList.map(eachCart => (
            <CartCard key={eachCart.id} eachCart={eachCart} />
          ))
        }
      </div>

    </main>
  )
}
