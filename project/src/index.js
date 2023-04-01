import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderComp from './header';

// const headWrapper = ReactDOM.createRoot(document.getElementById('head-wrapper'));
// headWrapper.render(<HeaderComp />);

const pageWrapper = ReactDOM.createRoot(document.getElementById('page-wrapper'));
pageWrapper.render(
  <React.StrictMode>
    <HeaderComp />
  </React.StrictMode>
);
