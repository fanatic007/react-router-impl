import { Box, List } from "@mui/material";
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
    <Box sx={{ pt:6.5, pb:1, px:1, bgcolor:'grey.200',}}>
      <List
        sx={{ minHeight:600, maxWidth: 280, bgcolor: 'transparent' }}
        component="nav"      
      >
      {
        Children.toArray(navRoutes?.map(route => <NestedListItem route={route}/>))
      }
      </List>
    </Box>
  );
}

export default Navbar;