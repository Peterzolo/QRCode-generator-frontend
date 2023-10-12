import { PayloadAction } from "@reduxjs/toolkit";

export const movieReducers = {
  fetchRandomMovies(state: { isLoading: boolean }, _: PayloadAction<any>) {
    state.isLoading = true;
  },
};
