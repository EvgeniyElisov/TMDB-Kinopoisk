import { MoviesList } from "@/common/components";
import { CategoryMoviesTitles, PagePathsType } from "@/common/constants";
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery } from "@/features/api/moviesApi";

export const MoviesSection = () => {

  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
  const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery({ page: 1 });
  const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery({ page: 1 });
  const { data: nowPlayingMoviesData } = useGetNowPlayingMoviesQuery({ page: 1 });

  const moviesListData = [
    { title: CategoryMoviesTitles.Popular, movies: popularMoviesData?.results || [], categoryPath: PagePathsType.PopularMovies },
    { title: CategoryMoviesTitles.TopRated, movies: topRatedMoviesData?.results || [], categoryPath: PagePathsType.TopRatedMovies },
    { title: CategoryMoviesTitles.Upcoming, movies: upcomingMoviesData?.results || [], categoryPath: PagePathsType.UpcomingMovies },
    { title: CategoryMoviesTitles.NowPlaying, movies: nowPlayingMoviesData?.results || [], categoryPath: PagePathsType.NowPlayingMovies },
  ];

  return (
    <section>
      {moviesListData.map((movieData) => (
        <MoviesList 
          key={movieData.title} 
          title={movieData.title} 
          movies={movieData.movies} 
          itemsNumber={6}
          categoryPath={movieData.categoryPath}
        />
      ))}
    </section>
  );
};
