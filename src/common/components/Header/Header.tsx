import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import { NavLink } from "react-router";

import styles from "./Header.module.css";
import { PagePaths } from "@/common/constants";
const navItems = [
  { to: PagePaths.Main, label: "Main" },
  { to: PagePaths.CategoryMovies, label: "Category Movies" },
  { to: PagePaths.FilteredMovies, label: "Filtered Movies" },
  { to: PagePaths.Search, label: "Search" },
  { to: PagePaths.Favorites, label: "Favorites" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <NavLink to={PagePaths.Main}>
          <img src={tmdbLogo} alt="TMDB Logo" />
        </NavLink>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? styles.active : "")}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
