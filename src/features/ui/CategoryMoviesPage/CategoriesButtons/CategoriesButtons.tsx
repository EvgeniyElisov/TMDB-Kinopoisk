import { nanoid } from "@reduxjs/toolkit";
import { CategoriesInfo } from "@/common/constants";
import styles from "./CategoriesButtons.module.css";
import { CategoryButton } from "./CategoryButton";



export const CategoriesButtons = () => {
  return (
    <nav className={styles.container} aria-label="Movie categories navigation">
      {CategoriesInfo.map((category) => (
        <CategoryButton
          key={nanoid()}
          title={category.title}
          path={category.path}
        />
      ))}
    </nav>
  );
};
