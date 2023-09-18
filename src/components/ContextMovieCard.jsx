import { useEffect, useState } from "react";
import { get } from "../data/httpClient.js";
import { MovieCard } from "./MovieCard.jsx";
import "./contextMovieCard.css";

export const ContextMovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);

      console.log(data);
    });
  }, []);

  return (
    <div>
      <ul className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
