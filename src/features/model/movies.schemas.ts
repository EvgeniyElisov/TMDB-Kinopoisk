import * as z from "zod";

const nonNegativeInt = z.number().int().min(0);
const nonNegativeNumber = z.number().min(0);
const nullableString = z.string().nullable();
const voteAverageSchema = z.number().min(0).max(10);
const genderSchema = z.number().int().min(0).max(2);


export const datesSchema = z.object({
  maximum: z.string(),
  minimum: z.string(),
});

export const genreSchema = z.object({
  id: nonNegativeInt,
  name: z.string(),
});

export const genresListSchema = z.object({
  genres: z.array(genreSchema),
});

export const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: nullableString,
  genre_ids: z.array(nonNegativeInt),
  id: nonNegativeInt,
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: nonNegativeNumber,
  poster_path: nullableString,
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: voteAverageSchema,
  vote_count: nonNegativeInt,
});

export const getMoviesSchema = z.object({
  page: nonNegativeInt,
  results: z.array(movieSchema),
  total_pages: nonNegativeInt,
  total_results: nonNegativeInt,
});

export const getMoviesWithDatesSchema = getMoviesSchema.extend({
  dates: datesSchema,
});

export const castSchema = z.object({
  adult: z.boolean(),
  cast_id: nonNegativeInt,
  character: z.string(),
  credit_id: z.string(),
  gender: genderSchema,
  id: nonNegativeInt,
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  order: nonNegativeInt,
  popularity: nonNegativeNumber,
  profile_path: nullableString,
});

export const crewSchema = z.object({
  adult: z.boolean(),
  credit_id: z.string(),
  department: z.string(),
  gender: genderSchema,
  id: nonNegativeInt,
  job: z.string(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: nonNegativeNumber,
  profile_path: nullableString,
});

export const movieCreditsSchema = z.object({
  id: nonNegativeInt,
  cast: z.array(castSchema),
  crew: z.array(crewSchema),
});

export const productionCompanySchema = z.object({
  id: nonNegativeInt,
  logo_path: nullableString,
  name: z.string(),
  origin_country: z.string(),
});

export const productionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

export const spokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const belongsToCollectionSchema = z.object({
  id: nonNegativeInt,
  name: z.string(),
  poster_path: nullableString,
  backdrop_path: nullableString,
}).nullable();

export const movieDetailsSchema = z.object({
  adult: z.boolean(),
  backdrop_path: nullableString,
  belongs_to_collection: belongsToCollectionSchema,
  budget: nonNegativeInt,
  genres: z.array(genreSchema),
  homepage: nullableString,
  id: nonNegativeInt,
  imdb_id: nullableString,
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: nonNegativeNumber,
  poster_path: nullableString,
  production_companies: z.array(productionCompanySchema),
  production_countries: z.array(productionCountrySchema),
  release_date: z.string(),
  revenue: nonNegativeInt,
  runtime: nonNegativeInt.nullable(),
  spoken_languages: z.array(spokenLanguageSchema),
  status: z.string(),
  tagline: nullableString,
  title: z.string(),
  video: z.boolean(),
  vote_average: voteAverageSchema,
  vote_count: nonNegativeInt,
});