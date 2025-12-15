import * as z from "zod";
import type {
  castSchema,
  crewSchema,
  datesSchema,
  genreSchema,
  genresListSchema,
  getMoviesSchema,
  getMoviesWithDatesSchema,
  getSimilarMoviesResponseSchema,
  movieCreditsSchema,
  movieDetailsSchema,
  movieSchema,
  productionCompanySchema,
  productionCountrySchema,
  spokenLanguageSchema,
  configImagesSchema,
  getConfigsSchema,
} from "../model/movies.schemas";

export type Dates = z.infer<typeof datesSchema>;
export type Genre = z.infer<typeof genreSchema>;
export type GetGenresListResponse = z.infer<typeof genresListSchema>;
export type Movie = z.infer<typeof movieSchema>;
export type GetMoviesResponse = z.infer<typeof getMoviesSchema>;
export type GetMoviesWithDatesResponse = z.infer<typeof getMoviesWithDatesSchema>;
export type Cast = z.infer<typeof castSchema>;
export type Crew = z.infer<typeof crewSchema>;
export type GetMovieCreditsResponse = z.infer<typeof movieCreditsSchema>;
export type MovieDetails = z.infer<typeof movieDetailsSchema>;
export type ProductionCompany = z.infer<typeof productionCompanySchema>;
export type ProductionCountry = z.infer<typeof productionCountrySchema>;
export type SpokenLanguage = z.infer<typeof spokenLanguageSchema>;
export type GetMovieDetailsResponse = z.infer<typeof movieDetailsSchema>;
export type ConfigImages = z.infer<typeof configImagesSchema>;
export type GetConfigsResponse = z.infer<typeof getConfigsSchema>;


// Params
export type BaseQueryParams = {
  language?: string;
  page?: number;
  region?: string;
};

export type GetMoviesBySearchParams = BaseQueryParams & {
  query: string;
  include_adult?: boolean;
  primary_release_year?: number;
  year?: number;
};

export type GetGenresListParams = Pick<BaseQueryParams, "language">;



export type SortByValues =
  | "popularity.asc"
  | "popularity.desc"
  | "title.asc"
  | "title.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "original_title.asc"
  | "original_title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";


export type GetFilteredMoviesParams = BaseQueryParams & {
  certification?: string;
  "certification.gte"?: string;
  "certification.lte"?: string;
  certification_country?: string;
  include_adult?: boolean;
  include_video?: boolean;
  primary_release_year?: number;
  "primary_release_date.gte"?: string;
  "primary_release_date.lte"?: string;
  "release_date.gte"?: string;
  "release_date.lte"?: string;
  sort_by?: SortByValues;
  "vote_average.gte"?: number;
  "vote_average.lte"?: number;
  "vote_count.gte"?: number;
  "vote_count.lte"?: number;
  watch_region?: string;
  with_cast?: string;
  with_companies?: string;
  with_crew?: string;
  with_genres?: number[];
  with_keywords?: string;
  with_origin_country?: string;
  with_original_language?: string;
  with_people?: string;
  with_release_type?: number;
  "with_runtime.gte"?: number;
  "with_runtime.lte"?: number;
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
  year?: number;
};

export type GetMovieCreditsParams = {
  movie_id: number;
  language?: string;
};

export type GetSimilarMoviesParams = GetMovieCreditsParams & {
  page?: number;
};

export type GetMovieDetailsParams = GetMovieCreditsParams & {
  append_to_response?: string;
};
