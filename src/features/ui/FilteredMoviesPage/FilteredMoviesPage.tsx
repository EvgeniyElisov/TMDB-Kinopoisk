import { useGetMoviesByFilterQuery } from "@/features/api/moviesApi";
import styles from "./FilteredMoviesPage.module.css";
import { FiltersSection } from "./FiltersSection";
import { MoviesList } from "@/common/components";

export const FilteredMoviesPage = () => {
  const { data: filteredMoviesData } = useGetMoviesByFilterQuery({});

  return (
    <main aria-label="Filtered movies page" className={styles.page}>
     <FiltersSection />
     <MoviesList movies={filteredMoviesData?.results || []} title="Filtered movies" />
    </main>
  );
};
