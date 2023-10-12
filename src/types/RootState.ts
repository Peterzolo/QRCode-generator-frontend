// import { ThemeState } from 'styles/theme/slice/types';

import { MovieState } from "../pages/movie/slice/types";

export interface RootState {
  movie?: MovieState;
}
