/** @format */

import { useState, useEffect } from "react";
import s from "../Reviews/Reviews.module.css";
import PropTypes from "prop-types";

import * as APImovie from "../../API/API";

const Reviews = ({ movieId }) => {
  const [reviews, setOneReviews] = useState({});

  useEffect(() => {
    APImovie.APImovieReviews(movieId).then((rev) => setOneReviews({ ...rev }));
  }, [movieId]);

  return (
    <div className={s.oneActors}>
      {reviews?.total_results ? (
        <ul>
          {reviews?.results?.map((author) => (
            <li key={author.id} className={s.oneActors__li}>
              <div>
                <h3>Author: {author.author}</h3>
                <p className={s.oneActors__title}>{author.content}</p>
                <p className={s.oneActors__title}>{author.created_at}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Now reviews</p>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string,
};
