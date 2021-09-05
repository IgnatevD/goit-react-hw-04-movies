/** @format */

import { useState, useEffect } from "react";
import s from "../Cast/Cast.module.css";
import PropTypes from "prop-types";

import * as APImovie from "../../API/API";

const Cast = ({ movieId }) => {
  const [actors, setOneActors] = useState({});

  useEffect(() => {
    APImovie.APImovieActors(movieId).then((actor) =>
      setOneActors({ ...actor })
    );
  }, [movieId]);

  return (
    <div className={s.oneActors}>
      {actors && (
        <ul>
          {actors?.cast?.map((actor) => (
            <li key={actor.id} className={s.oneActors__li}>
              <div className={s.oneActors__img}>
                {actor?.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor?.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <p className={s.oneActors__notFoto}>Нет фото &#128247;</p>
                )}
              </div>
              <div className={s.oneActors__title}>
                <h4>{actor.name}</h4>
                {actor?.character && <p>Character: {actor.character} </p>}
                {actor?.popularity && <p>Popularity: {actor.popularity}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};
