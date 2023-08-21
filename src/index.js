import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/index.css";
import "./assets/styles/variables.css";
import { Layout } from "./components/ui/Layout/Layout";
import {
  BASE_ROUTE,
  LEVELS_ROUTE,
  PRACTICE_ROUTE,
  THEORY_ROUTE,
} from "./constants/routeTemplates";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={BASE_ROUTE} element={<App />} />
          <Route path={LEVELS_ROUTE} element={<App />} />
          <Route path={THEORY_ROUTE} element={<App />} />
          <Route path={PRACTICE_ROUTE} element={<App />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
