import type { Movie } from "@/features/api/moviesApi.types";
import styles from "./MoviesList.module.css";
import { MovieCard } from "../MovieCard/MovieCard";

type Props = {
  movies: Movie[];
  title: string;
  columns?: 5 | 6;
};

export const MoviesList = ({ movies, title, columns = 6 }: Props) => {
  const moviesListClassName = columns === 5 ? `${styles.moviesList} ${styles.moviesList5}` : styles.moviesList;

  return (
    <section aria-labelledby={`movies-section-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <h2 id={`movies-section-${title.replace(/\s+/g, "-").toLowerCase()}`}>{title}</h2>
      <ul className={moviesListClassName} role="list">
        {movies?.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      <button className={styles.viewMoreButton} type="button" aria-label={`View more ${title}`}>
        View more
      </button>
    </section>
  );
};
