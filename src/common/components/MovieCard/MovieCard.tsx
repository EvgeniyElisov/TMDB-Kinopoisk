import { picturesBaseUrl } from "@/common/constants";
import { getRatingClass } from "@/common/utils";
import type { Movie } from "@/features/api/moviesApi.types";
import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";
import noPoster from "@/assets/images/no-poster.svg";


type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const imgPath = movie.poster_path ? `${picturesBaseUrl}${movie.poster_path}` : noPoster;
  const rating = +movie.vote_average.toFixed(1);
  const ratingClass = getRatingClass(rating);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
    // TODO: добавить функционал добавления в избранное
  };

  return (
    <article className={styles.card}>
      <NavLink to={`/movie/${movie.id}`} aria-label={`${movie.title} - Rating: ${rating}`}>
        <div className={styles.posterWrapper}>
          <img src={imgPath} alt={movie.title} className={styles.poster} loading="lazy" />
          <button
            className={styles.favoriteButton}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            type="button"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
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
