/** @format */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as APImovie from "../../../API/API";
import PropTypes from "prop-types";
import s from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const [listMovies, setlistMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    APImovie.APImovieDay().then((list) => setlistMovies([...list.results]));
  }, []);

  return (
    <ul className={s.list__movies}>
      {listMovies &&
        listMovies.map((e) => (
          <li key={e.id} className={s.item__movie}>
            <Link
              to={{
                pathname: `movies/${e.id}`,
                state: {
                  from: { location, label: "Назад на домашню старницу" },
                },
              }}
              className={s.item__link}
            >
              {e.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default HomePage;

HomePage.propTypes = {
  listMovies: PropTypes.array,
};
