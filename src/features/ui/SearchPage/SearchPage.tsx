import { SearchInput } from "@/common/components";
import { useGetMoviesBySearchQuery } from "@/features/api/moviesApi";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data: searchedMovies } = useGetMoviesBySearchQuery({ query }, { skip: !query });

  return (
    <main aria-label="Search page">
      <h1>Search Results</h1>
      <SearchInput />
      {!query && <p>Enter a movie title to search</p>}
      {searchedMovies?.results.length === 0 && <p>No movies found for {query}</p>}
    </main>
  );
};
