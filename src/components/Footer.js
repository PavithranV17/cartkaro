import { NavLink } from 'react-router-dom';
import "./Footer.css";

export const Footer = () => {

  function top(){
    window.scrollTo(0,0);
  }

  return (
    <footer>
        <div className='logo-left'>
          <NavLink onClick={top} to="/">
            <p>&copy; CartKaro</p>
          </NavLink>
        </div>

        <div className="links">
          <a href='/' target='_blank'>Instagram</a>
          <a href='/' target='_blank'>WhatsApp</a>
          <a href='/' target='_blank'>YouTube</a>
        </div>
    </footer>
  )
}
