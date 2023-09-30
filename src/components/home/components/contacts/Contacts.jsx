

import "./contacts.scss"

const Contacts = () => {
   return (
      <div className='contacts'>
         <div className="w__wrap">
            <div className="contacts__box">
               <div className="contacts__row">
                  <h2 className="contacts__text">Here u can see my contacts</h2>
                  <div className="contacts__column">
                     <a href="https://github.com/4egoPoint" target="_blank" className="contacts__a">See more in Github</a>
                     <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" className="contacts__a">Check my Linkedin</a>
                     <a href="tel:+48739137066" className="contacts__a">Or even call me</a>
                  </div>
                  <div className="contacts__animation">
                     <div className="contacts__an-i"></div>
                     <div className="contacts__an-i"></div>
                     <div className="contacts__an-i"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contacts