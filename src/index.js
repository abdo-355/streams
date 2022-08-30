import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

const el = document.querySelector("#root");
const root = ReactDom.createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
