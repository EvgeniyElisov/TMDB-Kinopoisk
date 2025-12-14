import { MovieRating } from "@/common/components/MovieRating";
import { FavoriteButton } from "@/common/components/FavoriteButton";
import { MoviePoster } from "@/common/components/MoviePoster";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";

type Props = {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
};

export const MovieCard = ({ id, title, posterPath, rating }: Props) => {
  return (
    <article className={styles.card}>
      <NavLink to={`/movie/${id}`} aria-label={`${title} - Rating: ${rating}`}>
        <div className={styles.posterWrapper}>
          <MoviePoster posterPath={posterPath} title={title} />
          <FavoriteButton />
          <MovieRating rating={rating} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </NavLink>
    </article>
  );
};
