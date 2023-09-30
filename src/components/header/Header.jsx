

import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
   const scrollExp = () => {
      window.scroll(0,1280)
   }
   const scrollCon = () => {
      window.scroll()
      
   }
   return (
      <div className="header">
         <div className="w__wrap">
            <nav className="header__row">
               <Link to="/" className="header__me">Virtual <span>Me</span></Link>
               <div className="header__info">
                  <button onClick={scrollExp} className="header__contacts">Experience</button>
                  <button onClick={scrollCon} className="header__contacts">Contacts</button>
               </div>
            </nav>
         </div>
      </div>
   )
}

export default Header