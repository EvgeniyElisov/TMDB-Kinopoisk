import { baseApi } from "@/app/api/baseApi";
import { withZodCatch } from "@/common/utils/withZodCatch";
import { genresListSchema, getMoviesSchema, getMoviesWithDatesSchema, movieCreditsSchema, movieDetailsSchema } from "../model/movies.schemas";
import type {
  BaseQueryParams,
  GetFilteredMoviesParams,
  GetGenresListParams,
  GetGenresListResponse,
  GetMovieCreditsParams,
  GetMovieCreditsResponse,
  GetMovieDetailsParams,
  GetMovieDetailsResponse,
  GetMoviesBySearchParams,
  GetMoviesResponse,
  GetMoviesWithDatesResponse,
} from "./moviesApi.types";
import { Endpoints } from "@/common/constants";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMoviesBySearch: build.query<GetMoviesResponse, GetMoviesBySearchParams>({
      query: (params) => ({ url: `${Endpoints.getMoviesBySearch}`, params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getPopularMovies: build.query<GetMoviesResponse, BaseQueryParams>({
      query: (params) => ({ url: `${Endpoints.getPopularMovies}`, params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getTopRatedMovies: build.query<GetMoviesResponse, BaseQueryParams>({
      query: (params) => ({ url: `${Endpoints.getTopRatedMovies}`, params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getUpcomingMovies: build.query<GetMoviesWithDatesResponse, BaseQueryParams>({
      query: (params) => ({ url: `${Endpoints.getUpcomingMovies}`, params }),
      ...withZodCatch(getMoviesWithDatesSchema),
    }),

    getNowPlayingMovies: build.query<GetMoviesWithDatesResponse, BaseQueryParams>({
      query: (params) => ({ url: `${Endpoints.getNowPlayingMovies}`, params }),
      ...withZodCatch(getMoviesWithDatesSchema),
    }),

    getMoviesByFilter: build.query<GetMoviesResponse, GetFilteredMoviesParams>({
      query: (params) => ({ url: `${Endpoints.getMoviesByFilter}`, params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getGenresList: build.query<GetGenresListResponse, GetGenresListParams>({
      query: (params) => ({ url: `${Endpoints.getGenresList}`, params }),
      ...withZodCatch(genresListSchema),
    }),

    getMovieCredits: build.query<GetMovieCreditsResponse, GetMovieCreditsParams>({
      query: ({ movie_id, ...params }) => ({ url: `movie/${movie_id}/credits`, params }),
      ...withZodCatch(movieCreditsSchema),
    }),

    getMovieDetails: build.query<GetMovieDetailsResponse, GetMovieDetailsParams>({
      query: ({ movie_id, ...params }) => ({ url: `${Endpoints.getMovieDetails}/${movie_id}`, params }),
      ...withZodCatch(movieDetailsSchema),
    }),
  }),
});

export const {
  useGetMoviesBySearchQuery,
  useLazyGetMoviesBySearchQuery,
  useGetPopularMoviesQuery,
  useLazyGetGenresListQuery,
  useLazyGetMovieCreditsQuery,
  useLazyGetMoviesByFilterQuery,
  useLazyGetNowPlayingMoviesQuery,
  useLazyGetPopularMoviesQuery,
  useLazyGetTopRatedMoviesQuery,
  useLazyGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMoviesByFilterQuery,
  useGetGenresListQuery,
  useGetMovieCreditsQuery,
  useGetMovieDetailsQuery,
  useLazyGetMovieDetailsQuery,
} = moviesApi;
