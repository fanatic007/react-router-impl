import React, { Suspense } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import Layout from "./layout";
import RedirectionPage from "./redirection-page";


const routeConfigMap = (routes: INavRoute[]): RouteObject[] =>
  routes.map((route) => {
    let element;
    if(route.component){
      const Comp = React.lazy(() => import(`../${route.component}`));
      element = <Suspense fallback={<>Loading</>}><Comp/></Suspense>;
    }
    else if(route.redirect){
      element = <RedirectionPage path={route.redirect} />;
    }
    return {
      exact: !route.redirect,
      path: route.path,
      element: element,
      children: route.routes ? routeConfigMap(route.routes) : [],
      handle:{
        crumb: (route.name && !route.redirect)? {name: route.name, to:route.path}: undefined,       
        icon: route.icon
      }
    };
  }
);
const getBrowserRouter = (routes: RouteObject[]) => createBrowserRouter(routes);

const AppRouter = ({routesConfig}:{routesConfig:INavRoute[]}) => {
  const routes = [{element: <Layout/>,children: routeConfigMap(routesConfig)}];
  const router = getBrowserRouter(routes);
  return <RouterProvider router={router} ></RouterProvider>;
};
export default AppRouter;
