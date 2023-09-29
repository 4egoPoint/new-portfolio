

import About from "./components/about-me/About"
import Cross from "./components/cross/Cross"
import Main from "./components/main/Main"
import Projects from "./components/projects/Projects"
import "./home.scss"

const Home = () => {
   return (
      <div className="home">
         <Main />
         <Cross />
         <About />
         <Projects />
      </div>
   )
}

export default Home