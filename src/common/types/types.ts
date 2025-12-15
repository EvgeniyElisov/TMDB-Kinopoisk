export type ThemeMode = "dark" | "light";

export const CategoryMoviesPaths = {
  Popular: "popular",
  TopRated: "top_rated",
  Upcoming: "upcoming",
  NowPlaying: "now_playing",
} as const;

export const CategoryMoviesTitles = {
  Popular: "Popular Movies",
  TopRated: "Top Rated Movies",
  Upcoming: "Upcoming Movies",
  NowPlaying: "Now Playing Movies",
} as const;

export type CategoryMoviesTitlesType = (typeof CategoryMoviesTitles)[keyof typeof CategoryMoviesTitles];

export const PagePaths = {
  Main: "/",
  PopularMovies: `/movies/${CategoryMoviesPaths.Popular}`,
  TopRatedMovies: `/movies/${CategoryMoviesPaths.TopRated}`,
  UpcomingMovies: `/movies/${CategoryMoviesPaths.Upcoming}`,
  NowPlayingMovies: `/movies/${CategoryMoviesPaths.NowPlaying}`,
  FilteredMovies: "/filtered-movies",
  Search: "/search",
  Favorites: "/favorites",
  Movie: "/movie/:id",
  CategoryMovies: "/movies/:category",
  NotFound: "*",
} as const;

export const PagePathsType = {
  PopularMovies: PagePaths.PopularMovies,
  TopRatedMovies: PagePaths.TopRatedMovies,
  UpcomingMovies: PagePaths.UpcomingMovies,
  NowPlayingMovies: PagePaths.NowPlayingMovies,
} as const;

export type PagePathsType = (typeof PagePathsType)[keyof typeof PagePathsType];

export const Endpoints = {
  getPopularMovies: `movie/${CategoryMoviesPaths.Popular}`,
  getTopRatedMovies: `movie/${CategoryMoviesPaths.TopRated}`,
  getUpcomingMovies: `movie/${CategoryMoviesPaths.Upcoming}`,
  getNowPlayingMovies: `movie/${CategoryMoviesPaths.NowPlaying}`,
  getMoviesByFilter: "discover/movie",
  getGenresList: "genre/movie/list",
  getMoviesBySearch: "search/movie",
  getMovieDetails: "movie",
  getConfigs: "configuration",
} as const;
