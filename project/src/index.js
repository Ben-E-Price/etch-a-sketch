import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HeaderComp from './header';
import Body from './body';
import Footer from './footer';

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

const footWrapper = ReactDOM.createRoot(document.getElementById('footer-wrapper'));
footWrapper.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
