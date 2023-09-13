import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./components/ui/Layout/Layout";
import LevelsPage from "./pages/LevelsPage/LevelsPage";
// import TheoryPage from "./pages/TheoryPage/TheoryPage";
// import PractivePage from "./pages/PractivePage/PractivePage";
import {
  ROOT_ROUTE,
  LEVEL_ROUTE,
  // PRACTICE_ROUTE,
  // THEORY_ROUTE,
  LEVEL_DETAIL_ROUTE,
  RADICAL_DETAIL_ROUTE,
  REVIEW_ROUTE,
} from "./constants/routeTemplates";
import "./assets/styles/index.css";
import "./assets/styles/variables.css";
import RootPage from "./pages/RootPage/RootPage";
import LevelDetailPage from "./pages/LevelDetailPage/LevelDetailPage";
import store from "./store/store";
import RadicalPage from "./pages/RadicalPage/RadicalPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={ROOT_ROUTE} element={<RootPage />} />
              <Route path={LEVEL_ROUTE} element={<LevelsPage />} />
              <Route
                path={LEVEL_DETAIL_ROUTE}
                element={<LevelDetailPage />}
              />
              <Route
                path={RADICAL_DETAIL_ROUTE}
                element={<RadicalPage />}
              />
              <Route path={REVIEW_ROUTE} element={<ReviewPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
