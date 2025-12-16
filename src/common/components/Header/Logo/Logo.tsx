import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import { PagePaths } from "@/common/types";
import { NavLink } from "react-router";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <NavLink to={PagePaths.Main} aria-label="Go to main page">
        <img src={tmdbLogo} alt="TMDB Logo" />
      </NavLink>
    </div>
  );
};

