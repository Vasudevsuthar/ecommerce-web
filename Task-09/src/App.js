import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelLoadTimer, setcancelLoadTimer]= useState(null);

 

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true); 
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const tramsformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_data,
        };
      });
      setMovies(tramsformedMovies);
    } catch (error) {
      setError(error.message);

      const retryLoadTimer = setTimeout(fetchMoviesHandler, 5000);
      setIsLoading(true);
      setcancelLoadTimer(retryLoadTimer);
    }
    setIsLoading(false);
  },[]);
   

  useEffect(()=>{
    fetchMoviesHandler();
  },[]);

  const handleCancelRetry = () => {
    if (cancelLoadTimer) {
      clearTimeout(cancelLoadTimer);
      setcancelLoadTimer(null);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>loading...</p>}
        <button onClick={handleCancelRetry}>Cancel Retry</button>
      </section>
    </React.Fragment>
  );
}

export default App;
