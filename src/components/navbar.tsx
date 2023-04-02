import { List } from "@mui/material";
import { Children } from "react";
import { INavRoute } from "../model/INavRoute";
import NestedListItem from "./nested-list-item";

const getNavItems = (routes: INavRoute[] | undefined)=>{
  if(routes){
    routes = routes.filter(route=> !route.hideInMenu);
    routes.forEach(route=> route.routes = route?.routes?.length ? getNavItems(route?.routes): undefined )
  }
  return routes;  
}

const Navbar = ({routes}:{routes:INavRoute[]}) => {
  const navRoutes = getNavItems(routes as INavRoute[]); 
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