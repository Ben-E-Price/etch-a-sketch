import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Body from './components/body/body';
import HeaderComp from './components/header';
import Footer from './components/footer';

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
