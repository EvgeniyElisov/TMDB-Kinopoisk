import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import { Path } from "@/common/routing";
import { NavLink } from "react-router";

const navItems = [
  { to: Path.Main, label: "Main" },
  { to: Path.CategoryMovies, label: "Category Movies" },
  { to: Path.FilteredMovies, label: "Filtered Movies" },
  { to: Path.Search, label: "Search" },
  { to: Path.Favorites, label: "Favorites" },
];

export const Header = () => {
  return (
    <header>
      <div>
        <NavLink to={Path.Main}>
          <img src={tmdbLogo} alt="TMDB Logo" />
        </NavLink>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
