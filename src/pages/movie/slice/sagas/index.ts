import { all, takeLatest } from "redux-saga/effects";
import { movieActions } from "..";
import { getRandomMoviesSaga } from "./movieSaga";

export default function* movieSaga() {
  yield all([takeLatest(movieActions.fetchRandomMovies, getRandomMoviesSaga)]);
}
