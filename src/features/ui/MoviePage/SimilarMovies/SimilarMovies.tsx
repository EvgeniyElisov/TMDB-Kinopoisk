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
    <div className={styles.container}>
      <h2 className={styles.title}>Similar Movies</h2>
      <ul className={styles.moviesList}>
        {topMovies.map((movie: Movie) => (
          <li key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              rating={+movie.vote_average.toFixed(1)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
