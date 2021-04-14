import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { location } from './data/forecast.json';
import { forecasts } from './data/forecast.json';


ReactDOM.render(
  <React.StrictMode>
    <App location={location} forecasts={forecasts}/>
  </React.StrictMode>,
  document.getElementById('root')
);


