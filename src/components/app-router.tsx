import React, { Suspense, useContext, useMemo } from "react";
import { LoaderFunctionArgs, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesContext } from "../App";
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
      loader: route.isDynamic? ({params}:LoaderFunctionArgs)=> params.id   : undefined  ,
      children: route.routes ? routeConfigMap(route.routes) : [],
      handle:{
        crumb: route.name? {
            name: route.name,
            to:route.path, 
            isDynamic: route.isDynamic,
          }: undefined,       
        icon: route.icon,
        locale: route.locale  
      }
    };
  }
);
const getBrowserRouter = (routes: RouteObject[]) => createBrowserRouter(routes);

const AppRouter = () => {
  const {routes:routesConfig} = useContext(RoutesContext);
  const routes = useMemo(()=>[{element: <Layout defaultRoute="/dashboard"/>,children: routeConfigMap(routesConfig)}],[routesConfig]);
  const router = getBrowserRouter(routes);
  return <RouterProvider router={router} ></RouterProvider>;  
};
export default AppRouter;
