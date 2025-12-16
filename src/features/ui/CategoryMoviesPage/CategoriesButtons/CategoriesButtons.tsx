import { NavLink } from "react-router";
import styles from "./CategoriesButtons.module.css";
import { CategoryMoviesTitles, PagePaths } from "@/common/types";

export const CategoriesInfo = [
  { title: CategoryMoviesTitles.Popular, path: PagePaths.PopularMovies },
  { title: CategoryMoviesTitles.TopRated, path: PagePaths.TopRatedMovies },
  { title: CategoryMoviesTitles.Upcoming, path: PagePaths.UpcomingMovies },
  { title: CategoryMoviesTitles.NowPlaying, path: PagePaths.NowPlayingMovies },
] as const;

export const CategoriesButtons = () => {
  return (
    <nav className={styles.container} aria-label="Movie categories navigation">
      {CategoriesInfo.map((category) => (
        <NavLink
          key={category.title}
          to={category.path}
          className={({ isActive }) =>
            isActive ? `${styles.button} ${styles.active}` : styles.button
          }
          aria-label={`Navigate to ${category.title} movies`}
        >
          {category.title}
        </NavLink>
      ))}
    </nav>
  );
};
