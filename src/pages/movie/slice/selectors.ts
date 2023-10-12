import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types";
import { initialState } from ".";

export const mySelector = (state: RootState) => state?.movie || initialState;

export const moviesSelector = createSelector(mySelector, (state) => state.data);

export const authLoadingSelector = createSelector(
  mySelector,
  (state) => state.isLoading
);

export const authErrorSelector = createSelector(
  mySelector,
  (state) => state.error
);
