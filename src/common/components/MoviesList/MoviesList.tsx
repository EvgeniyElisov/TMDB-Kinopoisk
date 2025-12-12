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
    <section>
      <h2>{title}</h2>
      <div className={moviesListClassName}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button className={styles.viewMoreButton} type="button">
        View more
      </button>
    </section>
  );
};
