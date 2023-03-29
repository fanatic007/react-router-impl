import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Link
} from "react-router-dom";
import { INavRoute } from "../model/INavRoute";
import BreadcrumbsBar from "./breadcrumb-bar";
import Layout from "./layout";


const routeConfigMap = (routes: INavRoute[]): RouteObject[] =>
  routes.map((route) => {
    const Comp = React.lazy(() => import(`../${route.component}`));
    return {
      exact: true,
      path: route.path,
      element: <Suspense fallback={<>Loading</>}><Comp /></Suspense>,
      children: route.routes ? routeConfigMap(route.routes) : [],
      handle:{
        crumb: {name: route.name,to:route.path}
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
