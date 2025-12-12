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
      <button className={styles.themeToggle} aria-label="Toggle theme" type="button">
        <svg
          className={styles.themeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </button>
    </header>
  );
};
