

import About from "./components/about-me/About"
import Main from "./components/main/Main"
import "./home.scss"

const Home = () => {
   return (
      <div className="home">
         <Main />
         <About />
      </div>
   )
}

export default Home