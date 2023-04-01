import { useEffect } from "react";
import { Navigate, useMatches, useNavigate } from "react-router-dom";
import RoutePage from "./route-page";

const RedirectionPage = ({path}:{path:string}) => {
  return <RoutePage><Navigate to={path} replace/></RoutePage>;
}

export default RedirectionPage;