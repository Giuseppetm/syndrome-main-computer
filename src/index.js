import React from 'react';
import ReactDOM from 'react-dom';
import About from './Views/About';
import Authentication from './Views/Authentication';
import Navigator from './Views/Navigator';
import Supers from './Views/Supers';
import SuperOmnidroidFrame from './Components/SuperOmnidroidFrame';
import NotFound from './Views/NotFound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/navigator" element={<Navigator />} />
        <Route exact path="/supers" element={<Supers />} /> 
        <Route path="/supers/:superId" element={<SuperOmnidroidFrame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();