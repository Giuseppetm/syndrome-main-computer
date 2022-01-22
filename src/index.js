import React from 'react';
import ReactDOM from 'react-dom';
import About from './Views/About';
import Authentication from './Views/Authentication';
import Navigator from './Views/Navigator';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/navigator" element={<Navigator />} />
        <Route 
          path="*" 
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();