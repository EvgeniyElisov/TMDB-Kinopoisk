import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import { PagePaths } from "@/common/types";
import { NavLink, useLocation } from "react-router";
import styles from "./Header.module.css";

const navItems = [
  { to: PagePaths.Main, label: "Main" },
  { to: PagePaths.PopularMovies, label: "Category Movies" },
  { to: PagePaths.FilteredMovies, label: "Filtered Movies" },
  { to: PagePaths.Search, label: "Search" },
  { to: PagePaths.Favorites, label: "Favorites" },
];

type Props = {
  toggleTheme: () => void;
};

export const Header = ({ toggleTheme }: Props) => {
  const location = useLocation();

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
              <NavLink
                to={item.to}
                end={item.to === PagePaths.Main}
                className={({ isActive }) => {
                  if (item.to === PagePaths.PopularMovies) {
                    return location.pathname.startsWith("/movies/") ? styles.active : "";
                  }
                  return isActive ? styles.active : "";
                }}
                aria-label={`Go to ${item.label} page`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.themeToggle} aria-label="Toggle theme" type="button" onClick={toggleTheme}>
        <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </header>
  );
};
