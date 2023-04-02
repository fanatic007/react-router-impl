import { ExpandLess } from "@mui/icons-material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Children } from "react";
import { NavLink } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";

const NestedListItem = ({route}:{route:INavRoute}) => {
  return(    
    <>
      <ListItem /*onClick={}*/ component={NavLink} to={route.path}>
        <ListItemIcon> <InboxIcon /> </ListItemIcon>        
        <ListItemText primary={route.name} />
        { route.routes && <ExpandLess />}
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItem>
      {
        route.routes &&
        <Collapse in={true} timeout="auto" unmountOnExit>
        {
            Children.toArray(route.routes.map(route=><NestedListItem route={route}/>))
        }
        </Collapse>
      }
    </>
  );
}



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
      disablePadding
    >
    {
      Children.toArray(navRoutes?.map(route => <NestedListItem route={route}/>))
    }
    </List>
  );
}

export default Navbar;