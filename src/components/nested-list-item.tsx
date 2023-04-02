import { Collapse, Icon, ListItem, ListItemIcon, ListItemText } from "@mui/material";
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
      <ListItem
        onClick={()=>setOpen(open=>!open)} component={NavLink} to={route.path}>
        <CustomIcon iconName={route.icon}></CustomIcon>
        <ListItemText primary={route.name} />
        {
          route.routes && 
          <>{open ? <ExpandLess /> : <ExpandMore />}</>
        }
      </ListItem>
      {
        route.routes &&
        <Collapse in={open} timeout="auto" unmountOnExit sx={{pl:2}}>
        {
            Children.toArray(route.routes.map(route=><NestedListItem route={route}/>))
        }
        </Collapse>
      }
    </>
  );
}

export default NestedListItem;