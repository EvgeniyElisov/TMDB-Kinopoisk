import { useLazyGetMoviesBySearchQuery } from "@/features/api/moviesApi";
import { useState, type ChangeEvent } from "react";

export const MainPage = () => {
  const [search, setSearch] = useState("");

  const [trigger, { data: movies }] = useLazyGetMoviesBySearchQuery();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const searchHandler = () => {
    const trimmedSearch = search.trim();
    if (trimmedSearch !== "") {
      trigger({ query: trimmedSearch })
        .unwrap()
        .then(() => setSearch(""));
    }
  };

  return (
    <main>
      <h1>Welcome to the TMDB Kinopoisk</h1>
      <h2>Browse the latest movies and TV shows</h2>
      <form action="">
        <input type="search" placeholder={"Search movie..."} value={search} onChange={onChangeHandler} />
        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </form>
    </main>
  );
};
