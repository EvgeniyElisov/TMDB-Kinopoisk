import { MovieRating } from "@/common/components/MovieRating";
import { FavoriteButton } from "@/common/components/FavoriteButton";
import { NavLink } from "react-router";
import styles from "./MovieCard.module.css";
import { Image } from "@/common/components/Image";
import noPoster from "@/assets/images/no-poster.jpg";
import { useEffect, useState } from "react";
import { isMovieInFavorites, toggleMovieFavorite } from "@/common/utils";

type Props = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

export const MovieCard = ({ id, title, poster_path, vote_average }: Props) => {  
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(isMovieInFavorites(id));
  }, [id]);

  const handleFavoriteClick = () => {
    toggleMovieFavorite(id, title, poster_path || "", vote_average);
    setIsFavorite(isMovieInFavorites(id));
  };

  return (
    <article className={styles.card}>
      <NavLink to={`/movie/${id}`} aria-label={`${title} - Rating: ${vote_average}`}>
        <div className={styles.posterWrapper}>
          <Image imagePath={poster_path} title={title} noImagePath={noPoster}/>
          <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} changeFavorite={handleFavoriteClick}/>
          <MovieRating rating={vote_average} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </NavLink>
    </article>
  );
};
