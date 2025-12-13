import type { GetMoviesResponse, GetMoviesWithDatesResponse } from "@/features/api/moviesApi.types";
import { CategoryMoviesPaths, CategoryMoviesTitles, type CategoryMoviesTitlesType } from "../types";

type CategoryMoviesDataParams = {
  category: string | undefined;
  popularMoviesData: GetMoviesResponse | undefined;
  topRatedMoviesData: GetMoviesResponse | undefined;
  upcomingMoviesData: GetMoviesWithDatesResponse | undefined;
  nowPlayingMoviesData: GetMoviesWithDatesResponse | undefined;
};

type CategoryMoviesDataResult = {
  movies: GetMoviesResponse["results"];
  title: CategoryMoviesTitlesType | "";
  totalPages: number;
};

export const getCategoryMoviesData = ({
  category,
  popularMoviesData,
  topRatedMoviesData,
  upcomingMoviesData,
  nowPlayingMoviesData,
}: CategoryMoviesDataParams): CategoryMoviesDataResult => {
  switch (category) {
    case CategoryMoviesPaths.Popular:
      return {
        movies: popularMoviesData?.results || [],
        title: CategoryMoviesTitles.Popular,
        totalPages: popularMoviesData?.total_pages || 1,
      };
    case CategoryMoviesPaths.TopRated:
      return {
        movies: topRatedMoviesData?.results || [],
        title: CategoryMoviesTitles.TopRated,
        totalPages: topRatedMoviesData?.total_pages || 1,
      };
    case CategoryMoviesPaths.Upcoming:
      return {
        movies: upcomingMoviesData?.results || [],
        title: CategoryMoviesTitles.Upcoming,
        totalPages: upcomingMoviesData?.total_pages || 1,
      };
    case CategoryMoviesPaths.NowPlaying:
      return {
        movies: nowPlayingMoviesData?.results || [],
        title: CategoryMoviesTitles.NowPlaying,
        totalPages: nowPlayingMoviesData?.total_pages || 1,
      };
    default:
      return { movies: [], title: "", totalPages: 0 };
  }
};
