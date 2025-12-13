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
    <div className={styles.container}>
      {CategoriesInfo.map((category) => (
        <NavLink
          key={category.title}
          to={category.path}
          className={({ isActive }) =>
            isActive ? `${styles.button} ${styles.active}` : styles.button
          }
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  );
};
