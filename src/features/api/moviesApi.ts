import { baseApi } from "@/app/api/baseApi";
import { withZodCatch } from "@/common/utils/withZodCatch";
import { genresListSchema, getMoviesSchema, getMoviesWithDatesSchema, movieCreditsSchema } from "../model/movies.schemas";
import type {
  BaseQueryParams,
  GetFilteredMoviesParams,
  GetGenresListParams,
  GetGenresListResponse,
  GetMovieCreditsParams,
  GetMovieCreditsResponse,
  GetMoviesBySearchParams,
  GetMoviesResponse,
  GetMoviesWithDatesResponse,
} from "./moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMoviesBySearch: build.query<GetMoviesResponse, GetMoviesBySearchParams>({
      query: (params) => ({ url: "search/movie", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getPopularMovies: build.query<GetMoviesResponse, BaseQueryParams>({
      query: (params) => ({ url: "movie/popular", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getTopRatedMovies: build.query<GetMoviesResponse, BaseQueryParams>({
      query: (params) => ({ url: "movie/top_rated", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getUpcomingMovies: build.query<GetMoviesWithDatesResponse, BaseQueryParams>({
      query: (params) => ({ url: "movie/upcoming", params }),
      ...withZodCatch(getMoviesWithDatesSchema),
    }),

    getNowPlayingMovies: build.query<GetMoviesWithDatesResponse, BaseQueryParams>({
      query: (params) => ({ url: "movie/now_playing", params }),
      ...withZodCatch(getMoviesWithDatesSchema),
    }),

    getMoviesByFilter: build.query<GetMoviesResponse, GetFilteredMoviesParams>({
      query: (params) => ({ url: "discover/movie", params }),
      ...withZodCatch(getMoviesSchema),
    }),

    getGenresList: build.query<GetGenresListResponse, GetGenresListParams>({
      query: (params) => ({ url: "genre/movie/list", params }),
      ...withZodCatch(genresListSchema),
    }),

    getMovieCredits: build.query<GetMovieCreditsResponse, GetMovieCreditsParams>({
      query: ({ movie_id, ...params }) => ({ url: `movie/${movie_id}/credits`, params }),
      ...withZodCatch(movieCreditsSchema),
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
  useGetMovieCreditsQuery,
  useLazyGetMovieCreditsQuery,
} = moviesApi;
