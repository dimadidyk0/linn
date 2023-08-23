import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./components/ui/Layout/Layout";
import LevelsPage from "./pages/LevelsPage/LevelsPage";
import TheoryPage from "./pages/TheoryPage/TheoryPage";
import PractivePage from "./pages/PractivePage/PractivePage";
import {
  ROOT_ROUTE,
  LEVEL_ROUTE,
  PRACTICE_ROUTE,
  THEORY_ROUTE,
  LEVEL_DETAIL_ROUTE,
} from "./constants/routeTemplates";
import "./assets/styles/index.css";
import "./assets/styles/variables.css";
import RootPage from "./pages/RootPage/RootPage";
import LevelDetailPage from "./pages/LevelDetailPage/LevelDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROOT_ROUTE} element={<RootPage />} />
          <Route path={LEVEL_ROUTE} element={<LevelsPage />} />
          <Route
            path={LEVEL_DETAIL_ROUTE}
            element={<LevelDetailPage />}
          />
          <Route path={THEORY_ROUTE} element={<TheoryPage />} />
          <Route path={PRACTICE_ROUTE} element={<PractivePage />} />
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
