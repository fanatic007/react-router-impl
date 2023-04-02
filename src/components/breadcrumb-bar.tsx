import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { Children } from "react";
import { Params, useLocation, useMatches } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CustomIcon from "./custom-icon";

type Match = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: string;
  handle: {crumb:any, hideInMenu:boolean, icon:string, hideInBreadcrumbs:boolean};
}

function BreadcrumbsBar() {
  let matches = useMatches() as Match[];
  const {pathname} = useLocation();
  let crumbs = matches
    .filter((match: Match) => Boolean(match.handle?.crumb))
    .map((match:Match) => 
      <Link 
        underline="hover"
        className={match.pathname !== pathname ? '':'disabled-link'} 
        href={match.pathname} 
        title={match.handle.icon}>            
          <Typography fontSize={'large'}>
            <CustomIcon iconName={match.handle.icon} />
            {match.data ?? match.handle.crumb.name}
          </Typography>            
      </Link>
    );
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›">
      {
        Children.toArray(crumbs)
      }
    </Breadcrumbs>  
  );
}

export default BreadcrumbsBar;