/** @format */

import { Route, useParams, useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import * as APImovie from "../../../API/API";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
import MovieCard from "./MovieCard/MovieCard";

const Cast = lazy(() =>
  import("../../Cast/Cast.jsx" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("../../Reviews/Reviews.jsx" /* webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = () => {
  const [oneMovies, setOneMovies] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    APImovie.APImovieId(movieId).then((movi) => setOneMovies({ ...movi }));
  }, [movieId]);

  const onGoback = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  return (
    <>
      <div className={s.conteiner}>
        <button type="button" onClick={onGoback} className={s.nav__button}>
          &#10094; {location?.state?.from?.label ?? "Назад"}
        </button>
        {oneMovies && <MovieCard oneMovies={oneMovies} />}
        <div>
          <div className={s.nav__card}>
            <p>Additional information</p>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: { label: "Назад на домашнюю страницу" },
                },
              }}
              className={s.nav__item}
              activeClassName={s.new__navItem}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: { label: "Назад на домашнюю страницу" },
                },
              }}
              className={s.nav__item}
              activeClassName={s.new__navItem}
            >
              Reviews
            </NavLink>
          </div>
          <div>
            <Suspense fallback={<h2>Loding...</h2>}>
              <Route path={`${url}/cast`}>
                <Cast movieId={movieId} />
              </Route>
              <Route path={`${url}/reviews`}>
                <Reviews movieId={movieId} />
              </Route>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  oneMovies: PropTypes.object,
  movieId: PropTypes.string,
};
