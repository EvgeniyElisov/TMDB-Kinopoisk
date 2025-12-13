import { GenresSection } from "../GenresSection";
import { RatingSlider } from "../RatingSlider";
import { SortBy } from "../SortBy";
import styles from "./FiltersSection.module.css";

export const FiltersSection = () => {
  return (
    <aside className={styles.filtersSection} aria-label="Filters and sorting">
      <h2>Filters/Sort</h2>
      <SortBy />
      <RatingSlider />
      <GenresSection />
      <button type="button" className={styles.resetButton}>
        Reset filters
      </button>
    </aside>
  );
};
