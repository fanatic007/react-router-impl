import React, { Suspense, useContext } from "react";
import { createBrowserRouter, LoaderFunctionArgs, Params, RouteObject, RouterProvider } from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import Layout from "./layout";
import RedirectionPage from "./redirection-page";
import { RoutesContext } from "../App";


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
      loader: route.isDynamic? ({params}:LoaderFunctionArgs)=> params.id   : undefined  ,
      children: route.routes ? routeConfigMap(route.routes) : [],
      handle:{
        crumb: route.name? {name: route.name, to:route.path, isDynamic: route.isDynamic}: undefined,       
        icon: route.icon        
      }
    };
  }
);
const getBrowserRouter = (routes: RouteObject[]) => createBrowserRouter(routes);

const AppRouter = () => {
  const {routes:routesConfig} = useContext(RoutesContext);
  const routes = [{element: <Layout defaultRoute="/dashboard"/>,children: routeConfigMap(routesConfig)}];
  const router = getBrowserRouter(routes);
  return <RouterProvider router={router} ></RouterProvider>;
};
export default AppRouter;
