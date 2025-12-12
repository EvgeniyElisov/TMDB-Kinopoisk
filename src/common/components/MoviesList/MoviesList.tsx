import type { Movie } from "@/features/api/moviesApi.types";
import styles from "./MoviesList.module.css";
import { MovieCard } from "../MovieCard/MovieCard";

type Props = {
  movies: Movie[];
  title: string;
};

export const MoviesList = ({ movies, title }: Props) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className={styles.moviesList}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button>View more</button>
    </section>
  );
};
