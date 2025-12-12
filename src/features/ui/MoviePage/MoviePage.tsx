import { useGetMovieDetailsQuery } from "@/features/api/moviesApi";
import { useParams } from "react-router";
import styles from "./MoviePage.module.css";

export const MoviePage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useGetMovieDetailsQuery({ movie_id: Number(id) });

  if (isLoading) {
    return (
      <main aria-label="Movie details" className={styles.page}>
        <p className={styles.loading}>Loading movie details...</p>
      </main>
    );
  }

  if (isError || !movie) {
    return (
      <main aria-label="Movie details" className={styles.page}>
        <p className={styles.error}>Failed to load movie details. Please try again later.</p>
      </main>
    );
  }

  return (
    <main aria-label="Movie details" className={styles.page}>
      <div>MoviePage - {movie.title}</div>
    </main>
  );
};
