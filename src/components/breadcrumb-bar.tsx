import { Children } from "react";
import { Link, Params, useMatches } from "react-router-dom";

type Match = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: any;
  handle: {crumb:any};
}

function BreadcrumbsBar() {
  let matches = useMatches() as Match[];
  let crumbs = matches
    .filter((match: Match) => Boolean(match.handle?.crumb) )
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match:Match) => <Link to={match.pathname}>{match.handle.crumb.name}</Link>);
  return (
    <div>
      {
        Children.toArray(crumbs.map((crumb, index) => <span>{crumb} | </span>))
      }
    </div>
  );
}

export default BreadcrumbsBar;