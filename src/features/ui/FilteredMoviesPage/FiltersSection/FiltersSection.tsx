import { Button, FiltersSectionSkeleton } from "@/common/components";
import { useGetGenresListQuery } from "@/features/api/moviesApi";
import type { GetFilteredMoviesParams } from "@/features/api/moviesApi.types";
import styles from "./FiltersSection.module.css";
import { GenresSection } from "./GenresSection";
import { RatingSlider } from "./RatingSlider";
import { SortBy } from "./SortBy";

type Props = {
  params: GetFilteredMoviesParams;
  setParams: (params: GetFilteredMoviesParams) => void;
  resetFilters: () => void;
};

export const FiltersSection = ({ params, setParams, resetFilters }: Props) => {
  const {data: genresData, isLoading: isLoadingGenres} = useGetGenresListQuery({});
  const genres = genresData?.genres || [];
  const handleResetFilters = () => {
    resetFilters();
  };

  if (isLoadingGenres) {
    return <FiltersSectionSkeleton />;
  }

  return (
    <aside className={styles.filtersSection} aria-label="Filters and sorting">
      <h2>Filters/Sort</h2>
      <SortBy params={params} setParams={setParams} />
      <RatingSlider params={params} setParams={setParams} />
      <GenresSection params={params} setParams={setParams} genres={genres} />
      <Button type="button" className={styles.resetButton} onClick={handleResetFilters}>
        Reset filters
      </Button>
    </aside>
  );
};
