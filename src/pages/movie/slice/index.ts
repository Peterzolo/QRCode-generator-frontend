import { useInjectSaga } from "redux-injectors";
import { createSlice } from "../../../utils/@reduxjs/toolkit"; // Importing from `utils` makes them more type-safe ✅
import { useInjectReducer } from "../../../utils/redux-injectors";

import movieSaga from "./sagas";
import { MovieState } from "./types";
import reducers from "./reducers";

export const initialState: MovieState = {
  data: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "movie",
  initialState,
  reducers,
});

export const { actions: movieActions } = slice;

export const useMovieSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: "movie", saga: movieSaga });
  return { actions: slice.actions };
};
