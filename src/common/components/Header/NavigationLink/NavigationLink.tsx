import { PagePaths } from "@/common/types";
import { NavLink, useLocation } from "react-router";
import styles from "./NavigationLink.module.css";

type Props = {
  to: string;
  label: string;
};

export const NavigationLink = ({ to, label }: Props) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const baseClass = styles.link;
        if (to === PagePaths.PopularMovies) {
          return location.pathname.startsWith("/movies/") ? `${baseClass} ${styles.active}` : baseClass;
        }
        return isActive ? `${baseClass} ${styles.active}` : baseClass;
      }}
      aria-label={`Go to ${label} page`}
    >
      {label}
    </NavLink>
  );
};
