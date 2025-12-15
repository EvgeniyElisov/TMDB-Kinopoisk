import { CategoryMoviesPage } from "@/features/ui/CategoryMoviesPage";
import { FavoritesPage } from "@/features/ui/FavoritesPage";
import { FilteredMoviesPage } from "@/features/ui/FilteredMoviesPage";
import { MainPage } from "@/features/ui/MainPage";
import { MoviePage } from "@/features/ui/MoviePage";
import { PageNotFound } from "@/features/ui/PageNotFound";
import { SearchPage } from "@/features/ui/SearchPage";
import { Route, Routes } from "react-router";
import { PagePaths } from "../types";

export const Routing = () => {
  return (
    <Routes>
      <Route path={PagePaths.Main} element={<MainPage />} />
      <Route path={PagePaths.Search} element={<SearchPage />} />
      <Route path={PagePaths.Favorites} element={<FavoritesPage />} />
      <Route path={PagePaths.FilteredMovies} element={<FilteredMoviesPage />} />
      <Route path={PagePaths.CategoryMovies} element={<CategoryMoviesPage />} />
      <Route path={PagePaths.Movie} element={<MoviePage />} />
      <Route path={PagePaths.NotFound} element={<PageNotFound />} />
    </Routes>
  );
};
