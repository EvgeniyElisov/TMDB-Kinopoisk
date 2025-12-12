export const picturePath = "https://image.tmdb.org/t/p/w500" as const;

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

export const CategoriesInfo = [
  { title: CategoryMoviesTitles.Popular, path: PagePaths.PopularMovies },
  { title: CategoryMoviesTitles.TopRated, path: PagePaths.TopRatedMovies },
  { title: CategoryMoviesTitles.Upcoming, path: PagePaths.UpcomingMovies },
  { title: CategoryMoviesTitles.NowPlaying, path: PagePaths.NowPlayingMovies },
] as const;

export const Endpoints = {
  getPopularMovies: `movie/${CategoryMoviesPaths.Popular}`,
  getTopRatedMovies: `movie/${CategoryMoviesPaths.TopRated}`,
  getUpcomingMovies: `movie/${CategoryMoviesPaths.Upcoming}`,
  getNowPlayingMovies: `movie/${CategoryMoviesPaths.NowPlaying}`,
  getMoviesByFilter: "discover/movie",
  getGenresList: "genre/movie/list",
  getMoviesBySearch: "search/movie",
  getMovieDetails: "movie",
} as const;
