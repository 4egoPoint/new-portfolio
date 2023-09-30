

import About from "./components/about-me/About"
import Cross from "./components/cross/Cross"
import Main from "./components/main/Main"
import Projects from "./components/projects/Projects"
import "./home.scss"
import Contacts from './components/contacts/Contacts';

const Home = () => {
   return (
      <div className="home">
         <Main />
         <Cross bul={"r"}/>
         <About />
         <Projects />
         <Cross bul={"l"}/>
         <Contacts />
      </div>
   )
}

export default Home