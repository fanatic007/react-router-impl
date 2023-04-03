import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Children } from "react";
import { useTranslation } from "react-i18next";
import { Link, Params, useLocation, useMatches } from "react-router-dom";
import CustomIcon from "./custom-icon";

type Match = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: string;
  handle: {crumb:any, hideInMenu:boolean, icon:string, isDynamic:boolean, showData:boolean, locale:string};
}

const BreadcrumbsBar = ()=> {
  let matches = useMatches() as Match[];
  const { t } = useTranslation('translation');
  const {pathname} = useLocation();

  let crumbs = matches
    .filter((match: Match) => Boolean(match.handle?.crumb))
    .map((match:Match) => 
      <Link 
        className={match.pathname !== pathname ? '':'disabled-link'} 
        to={match.pathname} 
        title={match.handle.icon}>            
          <Typography sx={{textDecorationLine:"none !important"}} fontSize={'large'} color={'primary'}>
            <CustomIcon iconName={match.handle.icon} color="primary"/>
            { match.handle.crumb.isDynamic ? match.data : t((match?.handle?.locale as string)?.replace(/\./g,':'))}
          </Typography>            
      </Link>
    );
  return (
    <Box sx={{ py:2,px:1}}>
      <Breadcrumbs sx={{ alignItems:'baseline'}} aria-label="breadcrumb" separator="›">
        {
          Children.toArray(crumbs)
        }
      </Breadcrumbs>  
    </Box>
  );
}

export default BreadcrumbsBar;