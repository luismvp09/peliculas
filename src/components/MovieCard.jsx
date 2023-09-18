import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
export const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div>
      <li className="movieCard">
        <Link to={"/movies/" + movie.id}>
          <img
            src={imageUrl}
            alt={movie.title}
            width={230}
            height={345}
            className="movieImage"
          />
          <div>{movie.title}</div>
        </Link>
      </li>
    </div>
  );
};
