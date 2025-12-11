import { CategoryMoviesPage } from "@/features/ui/CategoryMoviesPage";
import { FavoritesPage } from "@/features/ui/FavoritesPage";
import { FilteredMoviesPage } from "@/features/ui/FilteredMoviesPage";
import { MainPage } from "@/features/ui/MainPage";
import { SearchPage } from "@/features/ui/SearchPage";
import { Route, Routes } from "react-router";

export const Path = {
  Main: "/",
  CategoryMovies: "/movies",
  FilteredMovies: "/filtered-movies",
  Search: "/search",
  Favorites: "/favorites",
  NotFound: "*",
} as const;

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<MainPage />} />
      <Route path={Path.Search} element={<SearchPage />} />
      <Route path={Path.Favorites} element={<FavoritesPage />} />
      <Route path={Path.FilteredMovies} element={<FilteredMoviesPage />} />
      <Route path={Path.CategoryMovies} element={<CategoryMoviesPage />} />
    </Routes>
  );
};
