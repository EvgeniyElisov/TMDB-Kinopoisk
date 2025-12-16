import type { SortByValues } from "@/features/api/moviesApi.types";
import { CategoryMoviesTitles, PagePaths } from "../types";

export const picturesBaseUrl = "https://image.tmdb.org/t/p/original";
export const favoritesStorageKey = "favorite_movies";
export const themeModeStorageKey = "theme_mode";

export const sortByOptions: { value: SortByValues; label: string }[] = [
  { value: "popularity.desc", label: "Popularity ↓" },
  { value: "popularity.asc", label: "Popularity ↑" },
  { value: "title.desc", label: "Title ↓" },
  { value: "title.asc", label: "Title ↑" },
  { value: "revenue.desc", label: "Revenue ↓" },
  { value: "revenue.asc", label: "Revenue ↑" },
  { value: "primary_release_date.desc", label: "Primary release date ↓" },
  { value: "primary_release_date.asc", label: "Primary release date ↑" },
  { value: "original_title.desc", label: "Original title ↓" },
  { value: "original_title.asc", label: "Original title ↑" },
  { value: "vote_average.desc", label: "Vote average ↓" },
  { value: "vote_average.asc", label: "Vote average ↑" },
  { value: "vote_count.desc", label: "Vote count ↓" },
  { value: "vote_count.asc", label: "Vote count ↑" },
] as const;

export const CategoriesInfo = [
  { title: CategoryMoviesTitles.Popular, path: PagePaths.PopularMovies },
  { title: CategoryMoviesTitles.TopRated, path: PagePaths.TopRatedMovies },
  { title: CategoryMoviesTitles.Upcoming, path: PagePaths.UpcomingMovies },
  { title: CategoryMoviesTitles.NowPlaying, path: PagePaths.NowPlayingMovies },
] as const;

export const NavItems = [
  { to: PagePaths.Main, label: "Main" },
  { to: PagePaths.PopularMovies, label: "Category Movies" },
  { to: PagePaths.FilteredMovies, label: "Filtered Movies" },
  { to: PagePaths.Search, label: "Search" },
  { to: PagePaths.Favorites, label: "Favorites" },
] as const;