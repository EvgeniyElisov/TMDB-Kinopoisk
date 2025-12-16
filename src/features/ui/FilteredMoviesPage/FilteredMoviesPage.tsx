import { MoviesList, MoviesSkeleton } from "@/common/components";
import { useDebounceValue } from "@/common/hooks";
import { useGetMoviesByFilterInfiniteQuery } from "@/features/api/moviesApi";
import type { GetFilteredMoviesParams } from "@/features/api/moviesApi.types";
import { useState } from "react";
import styles from "./FilteredMoviesPage.module.css";
import { FiltersSection } from "./FiltersSection";

const initialParams: GetFilteredMoviesParams = {
  "vote_average.gte": 0.0,
  "vote_average.lte": 10.0,
  sort_by: "popularity.desc",
};

export const FilteredMoviesPage = () => {
  const [params, setParams] = useState<GetFilteredMoviesParams>(initialParams);
  const debouncedParams = useDebounceValue(params, 1000);
  const { 
    data: filteredMoviesData, 
    fetchNextPage, 
    hasNextPage, 
    isFetching, 
    isLoading: 
    isLoadingFilteredMovies, 
    isFetchingNextPage } = useGetMoviesByFilterInfiniteQuery(debouncedParams);
  const movies = filteredMoviesData?.pages.flatMap((page) => page.results) || [];

  const loadMoreHandler = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  const resetFiltersHandler = () => {
    setParams(initialParams);
  };

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main aria-label="Filtered movies page" className={styles.page}>
      <FiltersSection params={params} setParams={setParams} resetFilters={resetFiltersHandler}/>
      <div className={styles.content}>
        {isLoadingFilteredMovies && <MoviesSkeleton count={20} />}
        {!isLoadingFilteredMovies && movies.length === 0 && <p className={styles.message}>No movies found</p>}
        {!isLoadingFilteredMovies && movies.length > 0 && <MoviesList movies={movies} title="Filtered movies" columns={5} />}
        <div className={styles.buttonsContainer}>
          {!isLoadingFilteredMovies && hasNextPage && (
            <button className={styles.loadMoreButton} onClick={loadMoreHandler} disabled={isFetching}>
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          )}
          {/* Button вынести в отдельную компоненту */}
          <button
            className={styles.upButton}
            onClick={scrollToTopHandler}
            aria-label="Scroll to top"
            type="button"
          >
            <span className={styles.upArrow}>↑</span>
          </button>
        </div>
      </div>
    </main>
  );
};
