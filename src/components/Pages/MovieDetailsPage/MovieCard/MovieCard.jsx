/** @format */
import s from "../MovieCard/MovieCard.module.css";
import PropTypes from "prop-types";

const MovieCard = ({ oneMovies }) => {
  return (
    <div className={s.card}>
      {oneMovies?.poster_path && (
        <div className={s.card__img}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${oneMovies?.poster_path}`}
            alt={oneMovies.original_title}
          />
        </div>
      )}

      <div className={s.allTitle}>
        <h2 className={s.item__title}>{oneMovies?.original_title}</h2>
        <p className={s.item__title}>Rating: {oneMovies?.vote_average}</p>
        {oneMovies?.overview && (
          <>
            <h3>Overview</h3>
            <p className={s.item__title}>{oneMovies?.overview}</p>
          </>
        )}

        <h3>Genres</h3>
        <ul className={s.list__genres}>
          {oneMovies?.genres.map((e) => (
            <li key={e.id} className={s.item__genres}>
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  oneMovies: PropTypes.object,
};
