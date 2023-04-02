import { createContext } from 'react';
import './App.css';
import AppRouter from './components/app-router';
import { INavRoute } from './model/INavRoute';
import ROUTER_CONFIG from './router/ROUTER_CONFIG.json';
const {routes} = ROUTER_CONFIG as {routes : INavRoute[]};

export const RoutesContext = createContext({
  routes
});

const App = () => {
  return (
    <RoutesContext.Provider value={{routes}}>
      <AppRouter></AppRouter>    
    </RoutesContext.Provider>
  );
}

export default App;