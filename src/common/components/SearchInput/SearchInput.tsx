import { PagePaths } from "@/common/constants";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch === "") return;
    navigate(`${PagePaths.Search}?query=${trimmedSearch}`);
  };

  return (
    <form onSubmit={searchHandler}>
      <input type="search" placeholder={"Search movie..."} value={search} onChange={onChangeHandler} />
      <button type="submit">Search</button>
    </form>
  );
};
