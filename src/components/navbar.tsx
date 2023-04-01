import { Children } from "react";
import { NavLink } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";

const getNavItems = (routes: INavRoute[])=>{
  routes = routes.filter(route=> !route.hideInMenu)
  routes.forEach(route=> routes = [...routes, ...(route.routes ? getNavItems(route?.routes): [])] )
  return routes;
}


const Navbar = ({routes}:{routes:INavRoute[]}) => {
  return (
    <>
      <nav>
      {
        Children.toArray(getNavItems(routes as INavRoute[]).map(route=> <NavLink title={route.icon} to={route.path}>{route.name}</NavLink>))
      }
      </nav>
      <hr/>
    </>
  );
}

export default Navbar;