import { useLazyGetMoviesBySearchQuery } from "@/features/api/moviesApi";
import { useState, type ChangeEvent } from "react";

export const MainPage = () => {
  const [search, setSearch] = useState("");

  const [trigger, { data: movies }] = useLazyGetMoviesBySearchQuery();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const searchHandler = () => {
    trigger({ query: search }) //обрезать пробелы в начале и конце
      .unwrap()
      .then(() => setSearch(""));
  };

  return (
    <main aria-label="Main page" tabIndex={0} role="main">
      <input type="search" placeholder={"Search movie..."} value={search} onChange={onChangeHandler} />
      <button type="button" onClick={searchHandler}>
        Search
      </button>
    </main>
  );
};
