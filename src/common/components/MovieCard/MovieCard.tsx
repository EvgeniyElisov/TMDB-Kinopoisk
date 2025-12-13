import noPoster from "@/assets/images/no-poster.jpg";
import { picturesBaseUrl } from "@/common/constants";
import { getRatingClass } from "@/common/utils";
import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";

type Props = {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
};

export const MovieCard = ({ id, title, posterPath, rating }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const imgPath = posterPath ? `${picturesBaseUrl}${posterPath}` : noPoster;
  const ratingClass = getRatingClass(rating);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <article className={styles.card}>
      <NavLink to={`/movie/${id}`} aria-label={`${title} - Rating: ${rating}`}>
        <div className={styles.posterWrapper}>
          <img src={imgPath} alt={title} className={styles.poster} loading="lazy" />
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
          <h3 className={styles.title}>{title}</h3>
        </div>
      </NavLink>
    </article>
  );
};
