import { MovieRating } from "@/common/components/MovieRating";
import { FavoriteButton } from "@/common/components/FavoriteButton";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";
import { Image } from "@/common/components/Image";
import noPoster from "@/assets/images/no-poster.jpg";

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
          <Image imagePath={posterPath} title={title} noImagePath={noPoster}/>
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
