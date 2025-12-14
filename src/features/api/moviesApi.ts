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
import { Endpoints } from "@/common/types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMoviesBySearch: build.infiniteQuery<GetMoviesResponse, GetMoviesBySearchParams, number | undefined>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1;
          }
          return undefined;
        },
      },
      query: ({ pageParam, queryArg }) => {
        const { page, ...restParams } = queryArg;
        return {
          url: `${Endpoints.getMoviesBySearch}`,
          params: { page: pageParam, ...restParams },
        };
      },
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

    getMoviesByFilter: build.infiniteQuery<GetMoviesResponse, GetFilteredMoviesParams, number | undefined>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1;
          }
          return undefined;
        },
      },
      query: ({ pageParam, queryArg }) => {
        const { page, ...restParams } = queryArg;
        return {
          url: `${Endpoints.getMoviesByFilter}`,
          params: { page: pageParam, ...restParams },
        };
      },
      keepUnusedDataFor: 0,
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
  useGetMoviesBySearchInfiniteQuery,
  useGetPopularMoviesQuery,
  useLazyGetGenresListQuery,
  useLazyGetMovieCreditsQuery,
  useGetMoviesByFilterInfiniteQuery,
  useLazyGetNowPlayingMoviesQuery,
  useLazyGetPopularMoviesQuery,
  useLazyGetTopRatedMoviesQuery,
  useLazyGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetGenresListQuery,
  useGetMovieCreditsQuery,
  useGetMovieDetailsQuery,
  useLazyGetMovieDetailsQuery,
} = moviesApi;
