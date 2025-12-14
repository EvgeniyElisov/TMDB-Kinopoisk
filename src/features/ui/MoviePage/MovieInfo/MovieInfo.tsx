import { BackButton, MovieRating } from "@/common/components";
import { formatRuntime } from "@/common/utils";
import type { MovieDetails } from "@/features/api/moviesApi.types";
import styles from "./MovieInfo.module.css";
import noPhoto from "@/assets/images/no-photo.jpg";
import { Image } from "@/common/components/Image";

type Props = {
  movieDetails: MovieDetails;
};

export const MovieInfo = ({ movieDetails }: Props) => {
  return (
    <div className={styles.info}>
      <div className={styles.posterWrapper}>
        <Image imagePath={movieDetails.poster_path} title={movieDetails.title} noImagePath={noPhoto} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{movieDetails.title}</h1>
          <BackButton />
        </div>
        <div className={styles.meta}>
          <div className={styles.releaseDate}>
            <span className={styles.label}>Release date:</span> {movieDetails.release_date}
          </div>
          <MovieRating rating={movieDetails.vote_average} />
          {movieDetails.runtime && (
            <div className={styles.runtime}>
              <span className={styles.label}>Runtime:</span> {formatRuntime(movieDetails.runtime)}
            </div>
          )}
        </div>
        <p className={styles.overview}>{movieDetails.overview}</p>
        <div className={styles.genres}>
          {movieDetails.genres.map((genre) => (
            <span key={genre.id} className={styles.genre}>
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
