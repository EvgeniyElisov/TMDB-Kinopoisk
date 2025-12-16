import { MovieCard } from "@/common/components";
import type { Movie } from "@/features/api/moviesApi.types";
import styles from "./SimilarMovies.module.css";
import { sortBy } from "@/common/utils";

type Props = {
  similarMovies: Movie[];
};

export const SimilarMovies = ({ similarMovies }: Props) => {
  
  const topMovies = sortBy(similarMovies, "popularity", 6);

  return (
    <section className={styles.container} aria-labelledby="similar-movies-title">
      <h2 id="similar-movies-title" className={styles.title}>Similar Movies</h2>
      <ul className={styles.moviesList} role="list">
        {topMovies.map((movie: Movie) => (
          <li key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={+movie.vote_average || 0.0}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
