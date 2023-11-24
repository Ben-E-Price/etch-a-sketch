import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// Component Imports
import Body from './components/body/body';
import HeaderComp from './components/header';
import Main from './main';
import Footer from './components/footer';
import Modal from './components/body/modal';

const appContainer = ReactDOM.createRoot(document.getElementById('app-cont'));
appContainer.render(
  <React.StrictMode>
    <HeaderComp/>
    <Main/>
    <Footer/>
  </React.StrictMode>
)

const headWrapper = ReactDOM.createRoot(document.getElementById('head-wrapper')); 
headWrapper.render(
  <React.StrictMode>
    <HeaderComp />
  </React.StrictMode>
);

const mainWrapper = ReactDOM.createRoot(document.getElementById('main-wrapper'));
mainWrapper.render(
  <React.StrictMode>
    <Modal/>
    <Body />
  </React.StrictMode>
);

const footWrapper = ReactDOM.createRoot(document.getElementById('footer-wrapper'));
footWrapper.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
