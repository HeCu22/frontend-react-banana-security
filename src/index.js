import React from 'react';
import {AuthContext } from "./context/AuthContext";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// stap 4a. igv statische data declareer je context data object hier. igv dynamisch in App zelf
ReactDOM.render(
  <React.StrictMode>
    <Router>
       // stap 3. wikkel custom Provider-component om de applicatie en zit in children de applicatie zelf dus App met de tag haken eromheen
       // stap4b. AuthContext.Provider value={}> igv statische data die je dan ook in index.js kunt declareren
        <AuthContext>
            <App/>
        </AuthContext>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
