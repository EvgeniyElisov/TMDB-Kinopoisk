import { Button, MoviesList, MoviesSkeleton, SearchInput } from "@/common/components";
import { useInfiniteScroll } from "@/common/hooks";
import { useGetMoviesBySearchInfiniteQuery } from "@/features/api/moviesApi";
import { useSearchParams } from "react-router";
import styles from "./SearchPage.module.css";
import { LoadingTrigger } from "./LoadingTrigger";
import { scrollToTop } from "@/common/utils";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const {
    data: searchedMoviesData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useGetMoviesBySearchInfiniteQuery({ query }, { skip: !query });

  const movies = searchedMoviesData?.pages.flatMap((page) => page.results) || [];

  const { observerRef } = useInfiniteScroll({
    hasNextPage: hasNextPage ?? false,
    isFetching,
    fetchNextPage,
  });

  return (
    <main aria-label="Search page" className={styles.page}>
      <h1 className={styles.title}>Search Results</h1>
      <SearchInput placeholder="Search movie..." />
      {!query && <p className={styles.message}>Enter a movie title to search</p>}
      {query && isLoading && <MoviesSkeleton count={20} />}
      {query && movies.length === 0 && !isFetching && (
        <p className={styles.noResults}>
          No movies found for <strong>{query}</strong>
        </p>
      )}
      {query && movies.length > 0 && (
        <>
          <MoviesList movies={movies} title={`Search results for "${query}"`} columns={5} />
          <LoadingTrigger observerRef={observerRef} isFetchingNextPage={isFetchingNextPage} />
          {!hasNextPage && (
            <div className={styles.buttonsContainer}>
              <Button onClick={scrollToTop} aria-label="Scroll to top" type="button" className={styles.upButton}>
                <span className={styles.upArrow}>↑</span>
              </Button>
            </div>
          )}
        </>
      )}
    </main>
  );
};
