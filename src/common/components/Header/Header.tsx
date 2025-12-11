import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import { Path } from "@/common/routing";
import { NavLink } from "react-router";
export const Header = () => {

  return (
    <header>
      <div>
        <NavLink to={Path.Main}>
          <img src={tmdbLogo} alt="TMDB Logo" />
        </NavLink>
      </div>
      <nav>
        <NavLink to={Path.Main}>Main</NavLink>
        <NavLink to={Path.CategoryMovies}>Category Movies</NavLink>
        <NavLink to={Path.FilteredMovies}>Filtered Movies</NavLink>
        <NavLink to={Path.Search}>Search</NavLink>
        <NavLink to={Path.Favorites}>Favorites</NavLink>
      </nav>
    </header>
  );
};
