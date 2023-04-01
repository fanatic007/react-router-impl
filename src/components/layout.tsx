import { Outlet } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import BreadcrumbsBar from "./breadcrumb-bar";
import Navbar from "./navbar";

const Layout = ({routes}: { routes:INavRoute[]}) =>{
  return(
    <>
      <Navbar routes={routes}/>
      <BreadcrumbsBar/>
      <Outlet/>
    </>
  );
}

export default Layout;