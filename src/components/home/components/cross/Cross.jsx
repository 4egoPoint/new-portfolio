

import "./cross.scss"

const Cross = ({bul}) => {
   if (bul ==="r") {
      return (
         <div className="cross">
            <div className="cross__text"><span>FOR SALE</span> | <span>FOR SALE</span> | <span>FOR SALE</span> </div>
         </div >
      )
   } else {
      return (
         <div className="cross">
            <div className="cross__text-f"><span>FOR SALE</span> | <span>FOR SALE</span> | <span>FOR SALE</span> </div>
         </div>
      )
   }
}

export default Cross