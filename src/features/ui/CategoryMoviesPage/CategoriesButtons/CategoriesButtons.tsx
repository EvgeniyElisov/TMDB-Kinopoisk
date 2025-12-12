import { CategoriesInfo } from "@/common/constants";
import { NavLink } from "react-router";
import styles from "./CategoriesButtons.module.css";

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
