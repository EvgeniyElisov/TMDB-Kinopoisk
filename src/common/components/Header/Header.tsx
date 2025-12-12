import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import { NavLink } from "react-router";

import styles from "./Header.module.css";
import { PagePaths } from "@/common/constants";
const navItems = [
  { to: PagePaths.Main, label: "Main" },
  { to: PagePaths.PopularMovies, label: "Category Movies" },
  { to: PagePaths.FilteredMovies, label: "Filtered Movies" },
  { to: PagePaths.Search, label: "Search" },
  { to: PagePaths.Favorites, label: "Favorites" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <NavLink to={PagePaths.Main} aria-label="Go to main page">
          <img src={tmdbLogo} alt="TMDB Logo" />
        </NavLink>
      </div>
      <nav aria-label="Main navigation">
        <ul role="list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === PagePaths.Main} className={({ isActive }) => (isActive ? styles.active : "")} aria-label={`Go to ${item.label} page`}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
