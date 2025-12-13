import type { Movie } from "@/features/api/moviesApi.types";
import type { ThemeMode } from "../types";
import { themeModeStorageKey } from "../constants";

export const getThemeMode = (): ThemeMode => {
  return localStorage.getItem(themeModeStorageKey) as ThemeMode || "light";
  // дописать
}





const FAVORITES_STORAGE_KEY = "favorite_movies";

export const getFavoritesFromStorage = (): Movie[] => {
  try {
    const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error reading favorites from localStorage:", error);
    return [];
  }
};

export const saveFavoritesToStorage = (favorites: Movie[]): void => {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};

export const isMovieInFavorites = (movieId: number): boolean => {
  const favorites = getFavoritesFromStorage();
  return favorites.some((movie) => movie.id === movieId);
};

export const addMovieToFavorites = (movie: Movie): void => {
  const favorites = getFavoritesFromStorage();
  if (!isMovieInFavorites(movie.id)) {
    favorites.push(movie);
    saveFavoritesToStorage(favorites);
  }
};

export const removeMovieFromFavorites = (movieId: number): void => {
  const favorites = getFavoritesFromStorage();
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  saveFavoritesToStorage(updatedFavorites);
};

export const toggleMovieFavorite = (movie: Movie): boolean => {
  const isFavorite = isMovieInFavorites(movie.id);
  if (isFavorite) {
    removeMovieFromFavorites(movie.id);
    return false;
  } else {
    addMovieToFavorites(movie);
    return true;
  }
};

