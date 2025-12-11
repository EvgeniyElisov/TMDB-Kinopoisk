import * as z from "zod";

export const DatesSchema = z.object({
  maximum: z.string(),
  minimum: z.string(),
});

export const GenreSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
});

export const GenresListSchema = z.object({
  genres: z.array(GenreSchema),
});

export const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.union([z.null(), z.string()]),
  genre_ids: z.array(z.number().int().positive()),
  id: z.number().int().positive(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number().positive(),
  poster_path: z.union([z.null(), z.string()]),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number().positive(),
  vote_count: z.number().int().positive(),
});

export const getMoviesSchema = z.object({
  page: z.number().int().positive(),
  results: z.array(movieSchema),
  total_pages: z.number().int().positive(),
  total_results: z.number().int().positive(),
});

export const getMoviesWithDatesSchema = getMoviesSchema.extend({
  dates: DatesSchema,
});
