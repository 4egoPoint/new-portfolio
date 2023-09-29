
import { Outlet } from "react-router-dom";
import "./layout.scss"
import Header from "../header/Header";

const Layout = () => {
   return (
      <div className="layout">
         <Header />
         <Outlet />
      </div>
   )
}

export default Layout