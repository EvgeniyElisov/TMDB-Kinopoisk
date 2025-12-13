import { MoviesList, SearchInput } from "@/common/components";
import { useInfiniteScroll } from "@/common/hooks";
import { useGetMoviesBySearchInfiniteQuery } from "@/features/api/moviesApi";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import styles from "./SearchPage.module.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const {
    data: searchedMoviesData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetMoviesBySearchInfiniteQuery({ query }, { skip: !query });

  const allMovies = useMemo(() => {
    if (!searchedMoviesData?.pages) return [];
    return searchedMoviesData.pages.flatMap((page) => page.results);
  }, [searchedMoviesData]);

  const { observerRef } = useInfiniteScroll({
    hasNextPage: hasNextPage ?? false,
    isFetching,
    fetchNextPage,
  });

  return (
    <main aria-label="Search page" className={styles.page}>
      <h1 className={styles.title}>Search Results</h1>
      <SearchInput />
      {!query && <p className={styles.message}>Enter a movie title to search</p>}
      {query && allMovies.length === 0 && !isFetching && (
        <p className={styles.noResults}>
          No movies found for <strong>{query}</strong>
        </p>
      )}
      {query && allMovies.length > 0 && (
        <>
          <MoviesList movies={allMovies} title={`Search results for "${query}"`} columns={5} />
          <div ref={observerRef} />
        </>
      )}
    </main>
  );
};
