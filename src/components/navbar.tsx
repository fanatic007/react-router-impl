import { List } from "@mui/material";
import { Children, useContext } from "react";
import { INavRoute } from "../model/INavRoute";
import NestedListItem from "./nested-list-item";
import { RoutesContext } from "../App";

const getNavItems = (routes: INavRoute[] | undefined)=>{
  if(routes){
    routes = routes.filter(route=> !route.hideInMenu);
    routes.forEach(route=> route.routes = route?.routes?.length ? getNavItems(route?.routes): undefined )
  }
  return routes;  
}

const Navbar = () => {
  const {routes} = useContext(RoutesContext);
  const navRoutes = getNavItems(routes); 
  return (
    <List
      sx={{ maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
    {
      Children.toArray(navRoutes?.map(route => <NestedListItem route={route}/>))
    }
    </List>
  );
}

export default Navbar;