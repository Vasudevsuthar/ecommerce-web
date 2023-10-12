import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoding(true);
    const response = await fetch("https://swapi.dev/api/films/");
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
        setIsLoding(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
