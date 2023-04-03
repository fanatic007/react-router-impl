import i18n from 'i18next';
import { createContext } from 'react';
import { initReactI18next } from 'react-i18next';
import './App.css';
import AppRouter from './components/app-router';
import { INavRoute } from './model/INavRoute';
import ROUTER_CONFIG from './router/ROUTER_CONFIG.json';

const {routes} = ROUTER_CONFIG as {routes : INavRoute[]};

const resources = {
  en: {
    "user":{"login":"Login"},
    "dashboard": {"dashboard":"Dashboard","analysis":"Analysis", "monitor": "Monitor", "workplace":"Workplace" },
    "projects": {"projects":"Projects", "list":"List", "settings":"Settings", "details":"Details"}      
  },
  sp: {
    "user":{"login":"Acceso"},
    "dashboard": {"dashboard":"Panel","analysis":"Análisis", "monitor": "Supervisar" },
    "projects": {"projects":"Proyectos", "list":"Lista", "settings":"Ajustes", "details":"Detalles"}      
  }
};

i18n  
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',  
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources        
  })
  ;



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