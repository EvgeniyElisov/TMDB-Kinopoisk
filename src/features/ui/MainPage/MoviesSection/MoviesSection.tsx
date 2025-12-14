import { MoviesList, MoviesSkeleton } from "@/common/components";
import { CategoryMoviesTitles, PagePathsType } from "@/common/types";
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery } from "@/features/api/moviesApi";

export const MoviesSection = () => {

  const { data: popularMoviesData, isLoading: isLoadingPopular } = useGetPopularMoviesQuery({ page: 1 });
  const { data: topRatedMoviesData, isLoading: isLoadingTopRated } = useGetTopRatedMoviesQuery({ page: 1 });
  const { data: upcomingMoviesData, isLoading: isLoadingUpcoming } = useGetUpcomingMoviesQuery({ page: 1 });
  const { data: nowPlayingMoviesData, isLoading: isLoadingNowPlaying } = useGetNowPlayingMoviesQuery({ page: 1 });

  const moviesListData = [
    { title: CategoryMoviesTitles.Popular, movies: popularMoviesData?.results || [], categoryPath: PagePathsType.PopularMovies, isLoading: isLoadingPopular },
    { title: CategoryMoviesTitles.TopRated, movies: topRatedMoviesData?.results || [], categoryPath: PagePathsType.TopRatedMovies, isLoading: isLoadingTopRated },
    { title: CategoryMoviesTitles.Upcoming, movies: upcomingMoviesData?.results || [], categoryPath: PagePathsType.UpcomingMovies, isLoading: isLoadingUpcoming },
    { title: CategoryMoviesTitles.NowPlaying, movies: nowPlayingMoviesData?.results || [], categoryPath: PagePathsType.NowPlayingMovies, isLoading: isLoadingNowPlaying },
  ];

  return (
    <section>
      {moviesListData.map((movieData) => (
        movieData.isLoading ? (
          <MoviesSkeleton key={movieData.title} count={6} />
        ) : (
          <MoviesList 
            key={movieData.title} 
            title={movieData.title} 
            movies={movieData.movies} 
            itemsNumber={6}
            categoryPath={movieData.categoryPath}
            columns={6}
          />
        )
      ))}
    </section>
  );
};
