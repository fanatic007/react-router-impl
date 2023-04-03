import { Box, Collapse, Divider, ListItemButton, ListItemText } from "@mui/material";
import { PropsWithChildren, forwardRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Children } from "react";
import { useTranslation } from "react-i18next";
import CustomIcon from "./custom-icon";

const NavLinkComponent = forwardRef<any, any>(({children,to,className, activeClassName}:PropsWithChildren&{to:string, className:string, activeClassName:string},ref) =>(
    <NavLink
      to={to} 
      ref={ref}
      className={({ isActive }) => `${className} ${isActive ? activeClassName : ''}`}    
      >
      {children}
    </NavLink>
  )
);

const NestedListItem = ({route}:{route:INavRoute}) => {
  const [open, setOpen] = useState(true);
  const { t, i18n} = useTranslation('translation');

  return(
    <>      
      <Divider />
      <ListItemButton
          sx={{
            color: 'primary',
          }}
           component={NavLinkComponent} to={route.path} activeClassName={'active-link'} >
          <Box sx={{display:'flex',width:'100%'}}  onClick={()=>setOpen(open=>!open)}>
            <CustomIcon color="primary" iconName={route.icon}></CustomIcon>
            <ListItemText sx={{flex:'1 0 auto'}} primary={t(route?.locale?.replace(/\./g,':') as string)} />
            {
              route.routes && 
              <>{open ? <ExpandLess /> : <ExpandMore />}</>
            }            
          </Box>
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