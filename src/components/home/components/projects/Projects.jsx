import { Link } from "react-router-dom"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import "./projects.scss"

const Projects = () => {
   const targetRef = useRef();
   const { scrollYProgress } = useScroll({
      target: targetRef,
   })
   const x = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"])
   return (
      <div className="projects">
         <div className="w__wrap">
            <div ref={targetRef} className="projects__height">
               <motion.div style={{ x }} className="projects__row">
                  <Link to={"/pages/bounty"} className="project">
                     <img src={require("../../../../images/bounty.jpg")} alt="img" />
                  </Link>
                  <Link to={"/pages/weather"} className="project">
                     <img src={require("../../../../images/weather.jpg")} alt="img" />
                  </Link>
               </motion.div>
            </div>
         </div>
      </div>
   )
}

export default Projects