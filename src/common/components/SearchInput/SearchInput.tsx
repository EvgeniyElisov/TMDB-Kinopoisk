import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";
import styles from "./SearchInput.module.css";
import { PagePaths } from "@/common/types";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  const trimmedSearch = search.trim();
  const isDisabled = trimmedSearch === "";

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabled) return;
    navigate(`${PagePaths.Search}?query=${trimmedSearch}`);
  };

  return (
    <form onSubmit={searchHandler} className={styles.form}>
      <input type="search" placeholder={"Search movie..."} value={search} onChange={onChangeHandler} className={styles.input} />
      <button type="submit" disabled={isDisabled} className={styles.button}>
        Search
      </button>
    </form>
  );
};
