import { picturePath } from "@/common/constants";
import type { Movie } from "@/features/api/moviesApi.types";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";
import { getRatingClass } from "@/common/utils";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const imgPath = movie.poster_path ? `${picturePath}${movie.poster_path}` : "";
  const rating = +movie.vote_average.toFixed(1);
  const ratingClass = getRatingClass(rating);

  return (
    <article className={styles.card}>
      <NavLink to={`/movie/${movie.id}`} aria-label={`${movie.title} - Rating: ${rating}`}>
        <div className={styles.posterWrapper}>
          <img src={imgPath} alt={movie.title} className={styles.poster} loading="lazy" />
          <div className={`${styles.rating} ${styles[ratingClass]}`} aria-label={`Rating: ${rating}`}>
            {rating}
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{movie.title}</h3>
        </div>
      </NavLink>
    </article>
  );
};
