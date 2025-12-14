import { themeModeStorageKey } from "../constants";
import type { ThemeMode } from "../types";

export const initThemeLS = (initialThemeMode: ThemeMode) => {
  const themeMode = localStorage.getItem(themeModeStorageKey);
  if (themeMode) {
    return themeMode as ThemeMode;
  } else {
    localStorage.setItem(themeModeStorageKey, initialThemeMode);
    return initialThemeMode;
  }
};

export const toggleThemeLS = () => {
  const themeMode = localStorage.getItem(themeModeStorageKey) as ThemeMode | null;
  const newThemeMode: ThemeMode = themeMode === "light" ? "dark" : "light";
  localStorage.setItem(themeModeStorageKey, newThemeMode);
  return newThemeMode;
};
