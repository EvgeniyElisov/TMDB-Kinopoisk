import { CategoryMoviesPage } from "@/features/ui/CategoryMoviesPage";
import { FavoritesPage } from "@/features/ui/FavoritesPage";
import { FilteredMoviesPage } from "@/features/ui/FilteredMoviesPage";
import { MainPage } from "@/features/ui/MainPage";
import { MoviePage } from "@/features/ui/MoviePage";
import { SearchPage } from "@/features/ui/SearchPage";
import { Route, Routes } from "react-router";
import { CategoryMoviesPaths, PagePaths } from "../constants";

export const Routing = () => {
  return (
    <Routes>
      <Route path={PagePaths.Main} element={<MainPage />} />
      <Route path={PagePaths.Search} element={<SearchPage />} />
      <Route path={PagePaths.Favorites} element={<FavoritesPage />} />
      <Route path={PagePaths.FilteredMovies} element={<FilteredMoviesPage />} />
      <Route path={PagePaths.CategoryMovies} element={<CategoryMoviesPage />}>
        {/* <Route path={":category"} element={<MoviesList />} /> */}
        <Route path={CategoryMoviesPaths.Popular} element={<div>Popular Movies</div>} />
        <Route path={CategoryMoviesPaths.TopRated} element={<div>Top Rated Movies</div>} />
        <Route path={CategoryMoviesPaths.Upcoming} element={<div>Upcoming Movies</div>} />
        <Route path={CategoryMoviesPaths.NowPlaying} element={<div>Now Playing Movies</div>} />
      </Route>
      <Route path={PagePaths.Movie} element={<MoviePage />} />
    </Routes>
  );
};
