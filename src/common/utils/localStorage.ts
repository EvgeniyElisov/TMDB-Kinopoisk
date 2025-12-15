import { favoritesStorageKey, themeModeStorageKey } from "../constants";
import type { ThemeMode } from "../types";

export const initThemeLS = () : ThemeMode => {
  const initialThemeMode = "light";
  const themeMode = localStorage.getItem(themeModeStorageKey);
  if (themeMode) {
    return JSON.parse(themeMode) as ThemeMode;
  } else {
    localStorage.setItem(themeModeStorageKey, JSON.stringify(initialThemeMode));
    return initialThemeMode;
  }
};

export const toggleThemeLS = (): ThemeMode => {
  const themeMode = localStorage.getItem(themeModeStorageKey);
  const newThemeMode: ThemeMode = themeMode && JSON.parse(themeMode) === "light" ? "dark" : "light";
  localStorage.setItem(themeModeStorageKey, JSON.stringify(newThemeMode));
  return newThemeMode;
};

export const isMovieInFavorites = (movieId: number) => {
  const favorites = localStorage.getItem(favoritesStorageKey);
  if (favorites) {
    const favoritesArray = JSON.parse(favorites);
    return Array.isArray(favoritesArray) && favoritesArray.some((movie: { id: number   }) => movie.id === movieId);
  }
  return false;
};

export const toggleMovieFavorite = (movieId: number, title: string, poster_path: string, vote_average: number) => {
  const favorites = localStorage.getItem(favoritesStorageKey);
  let favoritesArray: Array<{ id: number; title: string; poster_path: string; vote_average: number }> = [];
  
  if (favorites) {
    favoritesArray = JSON.parse(favorites);
  }
  
  const isInFavorites = favoritesArray.some((movie: { id: number }) => movie.id === movieId);
  
  const newFavorites = isInFavorites
    ? favoritesArray.filter((movie: { id: number }) => movie.id !== movieId)
    : [...favoritesArray, { id: movieId, title, poster_path, vote_average }];
  localStorage.setItem(favoritesStorageKey, JSON.stringify(newFavorites));
};
