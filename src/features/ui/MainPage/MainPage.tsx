import { CategoryMoviesTitles } from "@/common/constants";
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "@/features/api/moviesApi";
import { MoviesSection } from "./MoviesSection";
import { WelcomeSection } from "./WelcomeSection";

export const MainPage = () => {
  const { data: popularMovies } = useGetPopularMoviesQuery({ page: 1 });
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery({ page: 1 });
  const { data: upcomingMovies } = useGetUpcomingMoviesQuery({ page: 1 });
  const { data: nowPlayingMovies } = useGetNowPlayingMoviesQuery({ page: 1 });

  const moviesListData = [
    { title: CategoryMoviesTitles.Popular, movies: popularMovies?.results || [] },
    { title: CategoryMoviesTitles.TopRated, movies: topRatedMovies?.results || [] },
    { title: CategoryMoviesTitles.Upcoming, movies: upcomingMovies?.results || [] },
    { title: CategoryMoviesTitles.NowPlaying, movies: nowPlayingMovies?.results || [] },
  ];

  return (
    <main aria-label="Main page">
      <WelcomeSection />
      <MoviesSection moviesListData={moviesListData} />
    </main>
  );
};
