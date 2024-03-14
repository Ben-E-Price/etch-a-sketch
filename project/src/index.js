import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

// Component Imports
import HeaderComp from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const appContainer = ReactDOM.createRoot(document.getElementById("app-cont"));
appContainer.render(
  <React.StrictMode>
    <HeaderComp/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);
