import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject
} from "react-router-dom";
import { INavRoute } from "../model/INavRoute";


const routeConfigMap = (routes: INavRoute[]): RouteObject[] =>
  routes.map((route) => {
    const Comp = React.lazy(() => import(`../${route.component}`));
    return {
      exact: true,
      path: route.path,
      element: <Suspense fallback={<>Loading</>}><Comp /></Suspense>,
      children: route.routes ? routeConfigMap(route.routes) : []
    };
  }
);
const getBrowserRouter = (routes: RouteObject[]) => createBrowserRouter(routes);

const AppRouter = ({routesConfig}:{routesConfig:INavRoute[]}) => {
  const routes = routeConfigMap(routesConfig);
  const router = getBrowserRouter(routes);
  return <RouterProvider router={router} ></RouterProvider>;
};
export default AppRouter;
