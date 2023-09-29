

import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
   return (
      <div className="header">
         <div className="w__wrap">
            <nav className="header__row">
               <Link to="/" className="header__me">Dear <span>Me</span></Link>
               <div className="header__info">
                  <Link to="/skills/" className="header__skills">Skills</Link>
                  <Link to="/contacts/" className="header__contacts">Contacts</Link>
               </div>
            </nav>
         </div>
      </div>
   )
}

export default Header