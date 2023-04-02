import { Collapse, Divider, Icon, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";

import { ExpandMore, ExpandLess } from "@mui/icons-material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Children } from "react";
import CustomIcon from "./custom-icon";


const NestedListItem = ({route}:{route:INavRoute}) => {
  const [open, setOpen] = useState(true);
  return(
    <>      
      <Divider />
      <ListItemButton
          onClick={()=>setOpen(open=>!open)} component={NavLink} to={route.path}>
          <CustomIcon color="primary" iconName={route.icon}></CustomIcon>
          <ListItemText primary={route.name} />
          {
            route.routes && 
            <>{open ? <ExpandLess /> : <ExpandMore />}</>
          }
      </ListItemButton>
      <Divider />
      {
        route.routes &&
        <Collapse sx={{ pl:1, bgcolor:'grey.100',}} in={open} timeout="auto" unmountOnExit>
        {
            Children.toArray(route.routes.map(route=><NestedListItem route={route}/>))
        }
        </Collapse>
      }
    </>
  );
}

export default NestedListItem;