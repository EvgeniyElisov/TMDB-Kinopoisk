import { CategoryMoviesTitles, PagePathsType } from "@/common/types";
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "@/features/api/moviesApi";
import { MoviesSection } from "./MoviesSection";
import { WelcomeSection } from "./WelcomeSection";

export const MainPage = () => {
  const { data: popularMoviesData, isLoading: isLoadingPopular } = useGetPopularMoviesQuery({ page: 1 });
  const { data: topRatedMoviesData, isLoading: isLoadingTopRated } = useGetTopRatedMoviesQuery({ page: 1 });
  const { data: upcomingMoviesData, isLoading: isLoadingUpcoming } = useGetUpcomingMoviesQuery({ page: 1 });
  const { data: nowPlayingMoviesData, isLoading: isLoadingNowPlaying } = useGetNowPlayingMoviesQuery({ page: 1 });

  const moviesListData = [
    { title: CategoryMoviesTitles.Popular, 
      movies: popularMoviesData?.results || [], 
      categoryPath: PagePathsType.PopularMovies, 
      isLoading: isLoadingPopular },
    {
      title: CategoryMoviesTitles.TopRated,
      movies: topRatedMoviesData?.results || [],
      categoryPath: PagePathsType.TopRatedMovies,
      isLoading: isLoadingTopRated,
    },
    {
      title: CategoryMoviesTitles.Upcoming,
      movies: upcomingMoviesData?.results || [],
      categoryPath: PagePathsType.UpcomingMovies,
      isLoading: isLoadingUpcoming,
    },
    {
      title: CategoryMoviesTitles.NowPlaying,
      movies: nowPlayingMoviesData?.results || [],
      categoryPath: PagePathsType.NowPlayingMovies,
      isLoading: isLoadingNowPlaying,
    },
  ];

  const backdrops = popularMoviesData?.results.map((movie) => movie.backdrop_path || "") || [];

  return (
    <main aria-label="Main page">
      <WelcomeSection backdrops={backdrops} />
      <MoviesSection moviesListData={moviesListData} />
    </main>
  );
};
