import { CastListSkeleton, MovieInfoSkeleton, MoviesSkeleton } from "@/common/components/Skeletons";
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery } from "@/features/api/moviesApi";
import { useParams } from "react-router";
import { CastList } from "./CastList";
import { MovieInfo } from "./MovieInfo";
import styles from "./MoviePage.module.css";
import { SimilarMovies } from "./SimilarMovies/SimilarMovies";

export const MoviePage = () => {
  const { id } = useParams();
  const { data: movieDetails, isLoading, isError } = useGetMovieDetailsQuery({ movie_id: Number(id) });
  const {
    data: similarMovies,
    isLoading: isSimilarMoviesLoading,
    isError: isSimilarMoviesError,
  } = useGetSimilarMoviesQuery({ movie_id: Number(id) }, { skip: !movieDetails });
  const {
    data: movieCredits,
    isLoading: isCreditsLoading,
    isError: isCreditsError,
  } = useGetMovieCreditsQuery({ movie_id: Number(id) }, { skip: !movieDetails });

  if (isLoading) {
    return (
      <main aria-label="Movie details" className={styles.page}>
        <MovieInfoSkeleton />
        <CastListSkeleton />
        <MoviesSkeleton count={6} />
      </main>
    );
  }

  if (isError || !movieDetails) {
    return (
      <main aria-label="Movie details" className={styles.page}>
        <p className={styles.error}>Failed to load movie details. Please try again later.</p>
      </main>
    );
  }

  return (
    <main aria-label="Movie details" className={styles.page}>
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      {isCreditsLoading ? (
        <CastListSkeleton />
      ) : (
        movieCredits?.cast && <CastList cast={movieCredits.cast} />
      )}
      {isSimilarMoviesLoading ? (
        <MoviesSkeleton count={6} />
      ) : (
        similarMovies && <SimilarMovies similarMovies={similarMovies.results} />
      )}
    </main>
  );
};
