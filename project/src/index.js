import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HeaderComp from './header';
import Body from './body';

const headWrapper = ReactDOM.createRoot(document.getElementById('head-wrapper')); 
headWrapper.render(
  <React.StrictMode>
    <HeaderComp />
  </React.StrictMode>
);

const mainWrapper = ReactDOM.createRoot(document.getElementById('main-wrapper'));
mainWrapper.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
);
