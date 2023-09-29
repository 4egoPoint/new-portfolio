

import "./main.scss"

const Main = () => {
   return (
      <div className="main-info">
         <div className="w__wrap">
            <div className="main-info__box">
               <img src={require("../../../../images/me.jpg")} alt="" className="main-info__img"/>
               <div className="main-info__text">
                  <span className="main-info__text-span">Hi,</span><p> <span>I</span><span>'</span><span>m</span> <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>e</span><span>n</span><span>d</span></p> <p><span>W</span><span>e</span><span>b</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></p>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default Main