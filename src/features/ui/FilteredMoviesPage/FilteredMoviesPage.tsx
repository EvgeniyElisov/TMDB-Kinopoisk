import { useGetMoviesByFilterQuery } from "@/features/api/moviesApi";
import styles from "./FilteredMoviesPage.module.css";
import { FiltersSection } from "./FiltersSection";
import { MoviesList } from "@/common/components";

export const FilteredMoviesPage = () => {
  const { data: filteredMoviesData } = useGetMoviesByFilterQuery({page: 1});

  return (
    <main aria-label="Filtered movies page" className={styles.page}>
      <FiltersSection />
      <div className={styles.content}>
        <MoviesList movies={filteredMoviesData?.results || []} title="Filtered movies" columns={5} />
        {filteredMoviesData?.results?.length === 0 && <p className={styles.message}>No movies found</p>}
      </div>
    </main>
  );
};
