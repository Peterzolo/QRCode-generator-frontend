import { call, delay, put } from "redux-saga/effects";
import { apiCall } from "../../../../utils/axios";

import { movieActions } from "..";

export function* getRandomMoviesSaga(): Generator<any, void, any> {
  yield delay(500);
  try {
    const response = yield call(apiCall, {
      route: "/movies/random",
    });
    console.log("RESPONSE", response);

    yield put(movieActions.setData(response.result));

    yield put(movieActions.setIsLoading(false));
  } catch (error: any) {
    yield put(movieActions.setError(error.message));

    yield put(movieActions.setIsLoading(false));
  }
}
