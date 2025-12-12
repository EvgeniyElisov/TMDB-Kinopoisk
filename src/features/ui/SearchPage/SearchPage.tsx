import { MoviesList, SearchInput } from "@/common/components";
import { useGetMoviesBySearchQuery } from "@/features/api/moviesApi";
import { useSearchParams } from "react-router";
import styles from "./SearchPage.module.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data: searchedMoviesData } = useGetMoviesBySearchQuery({ query }, { skip: !query });

  return (
    <main aria-label="Search page" className={styles.page}>
      <h1 className={styles.title}>Search Results</h1>
      <SearchInput />
      {!query && <p className={styles.message}>Enter a movie title to search</p>}
      {query && searchedMoviesData?.results.length === 0 && (
        <p className={styles.noResults}>
          No movies found for <strong>{query}</strong>
        </p>
      )}
      {query && searchedMoviesData?.results && searchedMoviesData.results.length > 0 && (
        <MoviesList movies={searchedMoviesData.results} title={`Search results for "${query}"`} />
      )}
    </main>
  );
};
