import { Outlet } from "react-router-dom";
import BreadcrumbsBar from "./breadcrumb-bar";

const Layout = () =>{
  return(
    <>
      <BreadcrumbsBar/>
      <Outlet/>
    </>
  );
}

export default Layout;