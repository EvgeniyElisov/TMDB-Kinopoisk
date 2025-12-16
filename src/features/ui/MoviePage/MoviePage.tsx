import { CastListSkeleton, MovieInfoSkeleton, MoviesSkeleton } from "@/common/components/Skeletons";
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery } from "@/features/api/moviesApi";
import { useParams } from "react-router";
import { CastList } from "./CastList";
import { MovieInfo } from "./MovieInfo";
import styles from "./MoviePage.module.css";
import { SimilarMovies } from "./SimilarMovies/SimilarMovies";

export const MoviePage = () => {
  const { id } = useParams();
  const movie_id = Number(id);
  const { data: movieDetails, isLoading: movieDetailsLoading } = useGetMovieDetailsQuery({ movie_id });
  const { data: similarMovies, isLoading: isSimilarMoviesLoading } = useGetSimilarMoviesQuery({ movie_id }, { skip: !movieDetails });
  const { data: movieCredits, isLoading: isCreditsLoading } = useGetMovieCreditsQuery({ movie_id }, { skip: !movieDetails });

  if (movieDetailsLoading || isSimilarMoviesLoading || isCreditsLoading) {
    return (
      <main aria-label="Movie details" className={styles.page}>
        <MovieInfoSkeleton />
        <CastListSkeleton />
        <MoviesSkeleton count={6} />
      </main>
    );
  }

  return (
    <main aria-label="Movie details" className={styles.page}>
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      {movieCredits?.cast && <CastList casts={movieCredits.cast} />}
      {similarMovies?.results && <SimilarMovies similarMovies={similarMovies.results} />}
    </main>
  );
};
