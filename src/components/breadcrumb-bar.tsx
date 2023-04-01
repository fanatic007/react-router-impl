import { Children } from "react";
import { Link, Params, useLocation, useMatches } from "react-router-dom";

type Match = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: any;
  handle: {crumb:any, hideInMenu:boolean, icon:string, hideInBreadcrumbs:boolean};
}

function BreadcrumbsBar() {
  let matches = useMatches() as Match[];console.log(matches);  
  const {pathname} = useLocation();
  let crumbs = matches
    .filter((match: Match) => Boolean(match.handle?.crumb))
    .map((match:Match) => 
      <Link 
        className={match.pathname !== pathname ? '':'disabled-link'} 
        to={match.pathname} 
        title={match.handle.icon}>{match.handle.crumb.name}
      </Link>
    );
  return (
    <div>
      {
        Children.toArray(crumbs)
      }
    </div>
  );
}

export default BreadcrumbsBar;