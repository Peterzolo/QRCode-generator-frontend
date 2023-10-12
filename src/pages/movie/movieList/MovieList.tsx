import React, { useEffect } from "react";
import { Box } from "../../../components/box/Box";
import { useMovieSlice } from "../slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { moviesSelector } from "../slice/selectors";
import styled from "styled-components";

const MovieList: React.FC = () => {
  const { actions: movieAction } = useMovieSlice();
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);
  console.log("MOVIES", movies);

  useEffect(() => {
    // Dispatch the action to fetch random movies when the component mounts
    dispatch(movieAction.fetchRandomMovies([]));
  }, [dispatch, movieAction]);

  return (
    <Box>
      <MoviesBox>
        {movies &&
          movies.map((movie, index) => (
            <SingleImage key={index}>
              <Title>{movie.title}</Title>
              <Video>
                <iframe
                  width="560"
                  height="315"
                  src={movie.image}
                  title={movie.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>
            </SingleImage>
          ))}
      </MoviesBox>
    </Box>
  );
};

const MoviesBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SingleImage = styled(Box)`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Video = styled.div`
  iframe {
    width: 100%;
    height: 200px;
  }
`;

export default MovieList;
