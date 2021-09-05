/** @format */
const APIKey = "bbb8d7b7bccecfd8830020668d0f04c2";
const BASE_URL = "https://api.themoviedb.org/3";

export function APImovieDay() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${APIKey}`).then((res) =>
    res.json()
  );
}

export function APImovieId(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${APIKey}&language=en-US`).then(
    (res) => res.json()
  );
}

export function APImovieActors(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${APIKey}&language=en-US`
  ).then((res) => res.json());
}

export function APImovieReviews(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${APIKey}&language=en-US`
  ).then((res) => res.json());
}

export function APImovieSearch(search) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${APIKey}&language=en-US&query=${search}&page=1&include_adult=false`
  ).then((res) => res.json());
}
