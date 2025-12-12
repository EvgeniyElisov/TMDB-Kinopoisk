import type { Movie } from "@/features/api/moviesApi.types";
import { picturesBaseUrl } from "../constants";

export const getRandomBackdrop = (movies: Movie[]) => {
  if (!movies) return null;
  const moviesWithBackdrop = movies.filter((movie) => movie.backdrop_path);
  if (moviesWithBackdrop.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
  const randomMovie = moviesWithBackdrop[randomIndex];
  return `${picturesBaseUrl}${randomMovie.backdrop_path}`;
};
