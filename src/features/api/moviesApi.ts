import { baseApi } from "@/app/api/baseApi";
import { withZodCatch } from "@/common/utils/withZodCatch";
import { GenresListSchema, getMoviesSchema, getMoviesWithDatesSchema } from "../model/movies.schemas";
import type {
  GetFilteredMoviesParams,
  GetGenresListParams,
  GetGenresListResponse,
  GetMoviesBySearchParams,
  GetMoviesResponse,
  GetMoviesWithDatesResponse,
  GetPopularMoviesParams,
} from "./moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMoviesBySearch: build.query<GetMoviesResponse, GetMoviesBySearchParams>({
      query: (params) => ({ url: "search/movie", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getPopularMovies: build.query<GetMoviesResponse, GetPopularMoviesParams>({
      query: (params) => ({ url: "movie/popular", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getTopRatedMovies: build.query<GetMoviesResponse, GetPopularMoviesParams>({
      query: (params) => ({ url: "movie/top_rated", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getUpcomingMovies: build.query<GetMoviesWithDatesResponse, GetPopularMoviesParams>({
      query: (params) => ({ url: "movie/upcoming", params }),
      ...withZodCatch(getMoviesWithDatesSchema),
    }),

    getNowPlayingMovies: build.query<GetMoviesResponse, GetPopularMoviesParams>({
      query: (params) => ({ url: "movie/now_playing", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getMoviesByFilter: build.query<GetMoviesResponse, GetFilteredMoviesParams>({
      query: (params) => ({ url: "discover/movie", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getGenresList: build.query<GetGenresListResponse, GetGenresListParams>({
      query: (params) => ({ url: "genre/movie/list", params }),
      ...withZodCatch(GenresListSchema),
    }),
  }),
});

export const {
  useLazyGetMoviesBySearchQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMoviesByFilterQuery,
  useLazyGetMoviesByFilterQuery,
  useGetGenresListQuery,
} = moviesApi;
