import { NavLink } from "react-router";
import styles from "./CategoryButton.module.css";

type CategoryButtonProps = {
  title: string;
  path: string;
};

export const CategoryButton = ({ title, path }: CategoryButtonProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${styles.button} ${styles.active}` : styles.button
      }
      aria-label={`Navigate to ${title} movies`}
    >
      {title}
    </NavLink>
  );
};

