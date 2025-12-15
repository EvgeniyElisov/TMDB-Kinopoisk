import type { GetFilteredMoviesParams } from "@/features/api/moviesApi.types";
import { GenresSection } from "./GenresSection";
import { RatingSlider } from "./RatingSlider";
import { SortBy } from "./SortBy";
import styles from "./FiltersSection.module.css";

type Props = {
  params: GetFilteredMoviesParams;
  setParams: (params: GetFilteredMoviesParams) => void;
  resetFilters: () => void;
};

export const FiltersSection = ({ params, setParams, resetFilters }: Props) => {
  const handleResetFilters = () => {
    resetFilters();
  };

  return (
    <aside className={styles.filtersSection} aria-label="Filters and sorting">
      <h2>Filters/Sort</h2>
      <SortBy params={params} setParams={setParams} />
      <RatingSlider params={params} setParams={setParams} />
      <GenresSection params={params} setParams={setParams} />
      <button type="button" className={styles.resetButton} onClick={handleResetFilters}>
        Reset filters
      </button>
    </aside>
  );
};
