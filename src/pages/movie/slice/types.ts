export interface MovieState {
  data: IMovie[];
  isLoading: boolean;
  error: any;
}

export interface IMovie {
  title: string;
  image: string;
}
