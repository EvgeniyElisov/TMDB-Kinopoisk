import { picturePath } from "@/common/constants";
import type { Movie } from "@/features/api/moviesApi.types";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const imgPath = movie.poster_path ? `${picturePath}${movie.poster_path}` : "";
  const rating = +movie.vote_average.toFixed(1);

  const getRatingClass = () => {
    if (rating < 5) {
      return styles.ratingLow;
    }
    if (rating >= 5 && rating <= 8) {
      return styles.ratingMedium;
    }
    return styles.ratingHigh;
  };

  return (
    <NavLink to={`/movie/${movie.id}`} className={styles.card} aria-label={`${movie.title} - Rating: ${rating}`}>
      <div className={styles.posterWrapper}>
        <img src={imgPath} alt={movie.title} className={styles.poster} loading="lazy" />
        <div className={`${styles.rating} ${getRatingClass()}`}>{rating}</div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
      </div>
    </NavLink>
  );
};
