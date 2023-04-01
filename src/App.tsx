import './App.css';
import AppRouter from './components/app-router';
import { INavRoute } from './model/INavRoute';
import ROUTER_CONFIG from './router/ROUTER_CONFIG.json';
const {routes} = ROUTER_CONFIG as {routes : INavRoute[]};

const App = () => {
    return (
    <>
      <h1>Router</h1>
      <AppRouter routesConfig={routes}></AppRouter>    
    </>
  );
}

export default App;