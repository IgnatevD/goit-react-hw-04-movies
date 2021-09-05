/** @format */

import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import s from "../components/App.module.css";
import Navigation from "./Navigation/Navigation";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { withQuicklink } from "quicklink/dist/react/hoc.js";

const HomePage = lazy(() =>
  import("./Pages/HomePage/HomePage.jsx" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import(
    "./Pages/MoviesPage/MoviesPage.jsx" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetailsPage/MovieDetailsPage.jsx" /* webpackChunkName:"MovieDetailsPage" */
  )
);
const options = {
  origins: [],
};

export default function App() {
  return (
    <section className={s.section}>
      <Navigation />
      <div className={s.divConteiner}>
        <Suspense fallback={<h2>Loding...</h2>}>
          <Switch>
            <Route
              path="/"
              exact
              component={withQuicklink(HomePage, options)}
            />
            <Route
              path="/movies"
              exact
              component={withQuicklink(MoviesPage, options)}
            />
            <Route
              path="/movies/:movieId"
              component={withQuicklink(MovieDetailsPage, options)}
            />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </section>
  );
}
