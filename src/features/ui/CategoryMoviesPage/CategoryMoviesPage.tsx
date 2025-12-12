import { MoviesList } from "@/common/components";
import { CategoryMoviesPaths, CategoryMoviesTitles } from "@/common/constants";
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "@/features/api/moviesApi";
import { useParams } from "react-router";
import { CategoriesButtons } from "./CategoriesButtons";
import styles from "./CategoryMoviesPage.module.css";

export const CategoryMoviesPage = () => {
  const { category } = useParams();
  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.Popular });
  const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.TopRated });
  const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.Upcoming });
  const { data: nowPlayingMoviesData } = useGetNowPlayingMoviesQuery({ page: 1 }, { skip: category !== CategoryMoviesPaths.NowPlaying });

  const getMoviesData = () => {
    switch (category) {
      case CategoryMoviesPaths.Popular:
        return { movies: popularMoviesData?.results || [], title: CategoryMoviesTitles.Popular };
      case CategoryMoviesPaths.TopRated:
        return { movies: topRatedMoviesData?.results || [], title: CategoryMoviesTitles.TopRated };
      case CategoryMoviesPaths.Upcoming:
        return { movies: upcomingMoviesData?.results || [], title: CategoryMoviesTitles.Upcoming };
      case CategoryMoviesPaths.NowPlaying:
        return { movies: nowPlayingMoviesData?.results || [], title: CategoryMoviesTitles.NowPlaying };
      default:
        return { movies: [], title: "" };
    }
  };

  const { movies, title } = getMoviesData();


  return (
    <main aria-label="Movies by category page" className={styles.page}>
      <CategoriesButtons />
      <MoviesList movies={movies} title={title} />
    </main>
  );
};
