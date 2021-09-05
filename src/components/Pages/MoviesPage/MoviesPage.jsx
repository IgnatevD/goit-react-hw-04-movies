/** @format */

import { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import s from "../MoviesPage/MoviesPage.module.css";

import * as APImovie from "../../../API/API";

export default function MoviesPage() {
  const [searcName, setSearcName] = useState("");
  const [formName, setFormName] = useState("");

  const [listMovies, setListMovies] = useState(null);
  const { url } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();
  const queryOpder = new URLSearchParams(location.search).get("query");

  const getNameChange = (e) => {
    setSearcName(e.currentTarget.value.toLowerCase());
  };

  const getSubmitForm = (e) => {
    e.preventDefault();
    if (searcName.trim() === "") {
      return toast.error("Введите слово для поиска", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setFormName(searcName);
    history.push({
      ...location,
      search: `query=${searcName}`,
    });
  };

  useEffect(() => {
    if (!formName) return;
    APImovie.APImovieSearch(formName).then((movie) =>
      setListMovies({ ...movie })
    );
  }, [formName]);

  useEffect(() => {
    if (queryOpder) setSearcName(queryOpder);
    setFormName(queryOpder);
  }, [queryOpder]);

  return (
    <>
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={getSubmitForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button__label}>Поиск</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            value={searcName}
            onChange={getNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </div>
      <div>
        <ul className={s.list__movies}>
          {listMovies &&
            listMovies?.results?.map((e) => (
              <li key={e.id} className={s.item__movie}>
                <Link
                  to={{
                    pathname: `${url}/${e.id}`,
                    state: {
                      from: { location, label: "Назад к поиску" },
                    },
                  }}
                  className={s.item__link}
                >
                  {e.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

MoviesPage.propTypes = {
  searcName: PropTypes.string,
  formName: PropTypes.string,
};
