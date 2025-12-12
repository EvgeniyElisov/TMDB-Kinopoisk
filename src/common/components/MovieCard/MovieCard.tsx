import { picturePath } from "@/common/constants";
import type { Movie } from "@/features/api/moviesApi.types";
import { NavLink } from "react-router";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const imgPath = movie.poster_path ? `${picturePath}${movie.poster_path}` : "";
  return (
    <NavLink key={movie.id} to={`/movie/${movie.id}`}>
      <img src={imgPath} alt={movie.title} />
      <span>{movie.title}</span>
      <span>{movie.vote_average.toFixed(1)}</span>
    </NavLink>
  );
};
