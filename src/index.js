import React from 'react';
import ReactDOM from 'react-dom';
import About from './Views/About';
import Authentication from './Views/Authentication';
import Navigator from './Views/Navigator';
import Supers from './Views/Supers';
import SuperOmnidroidFrame from './Views/SuperOmnidroidFrame';
import SearchSuper from './Views/SearchSuper';
import SearchSuperResult from './Views/SearchSuperResult';
import Kronos from './Views/Kronos';
import KronosCountdown from './Views/KronosCountdown';
import NotFound from './Views/NotFound';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from './Context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactGA.initialize('G-220V3ZRLLS');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/navigator" element={<Navigator />} />
          <Route path="/supers" element={<Supers />} /> 
          <Route path="/supers/:superSlug" element={<SuperOmnidroidFrame />} />
          <Route path="/search_super" element={<SearchSuper />} />
          <Route path="/search_super/:superName" element={<SearchSuperResult />} />
          <Route path="/kronos" element={<Kronos /> } />
          <Route path="/kronos-countdown" element={<KronosCountdown /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();