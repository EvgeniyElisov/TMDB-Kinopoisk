import { MoviesList } from "@/common/components";
import { CategoryMoviesPaths, CategoryMoviesTitles } from "@/common/constants";
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "@/features/api/moviesApi";
import { useParams } from "react-router";
import { CategoriesButtons } from "./CategoriesButtons";
import styles from "./CategoryMoviesPage.module.css";

export const CategoryMoviesPage = () => {
  const { category } = useParams();
  const { data: popularQuery } = useGetPopularMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.Popular });
  const { data: topRatedQuery } = useGetTopRatedMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.TopRated });
  const { data: upcomingQuery } = useGetUpcomingMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.Upcoming });
  const { data: nowPlayingQuery } = useGetNowPlayingMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.NowPlaying });

  const getMoviesData = () => {
    switch (category) {
      case CategoryMoviesPaths.Popular:
        return { movies: popularQuery?.results || [], title: CategoryMoviesTitles.Popular };
      case CategoryMoviesPaths.TopRated:
        return { movies: topRatedQuery?.results || [], title: CategoryMoviesTitles.TopRated };
      case CategoryMoviesPaths.Upcoming:
        return { movies: upcomingQuery?.results || [], title: CategoryMoviesTitles.Upcoming };
      case CategoryMoviesPaths.NowPlaying:
        return { movies: nowPlayingQuery?.results || [], title: CategoryMoviesTitles.NowPlaying };
      default:
        return { movies: [], title: "" };
    }
  };

  const { movies, title } = getMoviesData();

  if (!movies || movies.length === 0) {
    return (
      <main aria-label="Movies by category" className={styles.page}>
        <CategoriesButtons />
        <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.7)", padding: "2rem" }}>No movies found</p>
      </main>
    );
  }

  return (
    <main aria-label="Movies by category" className={styles.page}>
      <CategoriesButtons />
      <MoviesList movies={movies} title={title} columns={5} />
    </main>
  );
};
