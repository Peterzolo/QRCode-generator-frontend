import { PayloadAction } from "@reduxjs/toolkit";
import { movieReducers } from "./movieReducers";

const reducers = {
  setData(
    state: { data: any; isLoading: boolean },
    action: PayloadAction<any>
  ) {
    state.data = action.payload;
    state.isLoading = false;
  },

  setIsLoading(state: { isLoading: boolean }, action: PayloadAction<boolean>) {
    state.isLoading = action.payload;
  },

  setError(state: { error: any }, action: PayloadAction<any>) {
    state.error = action.payload;
  },
  ...movieReducers,
};

export default reducers;
