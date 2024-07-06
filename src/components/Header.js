import Logo from '../assets/icon.png';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';
import { useCart } from "../context/CartContext";

export const Header = () => {

  const { cartList } = useCart();

  return (
    <header>
        <section>

              <div className="left">
                  <Link className='left-in' to="/">
                    <img src={Logo} alt="Cartkaro" />
                    <p className='cartkaro'>CartKaro</p>
                  </Link>
              </div>

              <div className="middle">
                  <NavLink className="nav" to="/">Home</NavLink>
                  <NavLink className="nav" to="cart">Cart</NavLink>
              </div>

              <div className="right">
                <Link className='cart-font' to="cart">
                   Cart : <span>{cartList.length}</span>
                </Link>
              </div>

        </section>
    </header>
  )
}
