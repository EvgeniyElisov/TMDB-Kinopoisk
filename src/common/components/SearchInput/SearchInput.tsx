import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router";
import styles from "./SearchInput.module.css";
import { PagePaths } from "@/common/types";

type Props = {
  placeholder: string;
};

export const SearchInput = ({ placeholder }: Props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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

  useEffect(() => {
    if (isDisabled && searchParams.has("query")) {
      searchParams.delete("query");
      setSearchParams({});
    }
  }, [isDisabled, searchParams]);

 
  return (
    <form onSubmit={searchHandler} className={styles.form}>
      <input type="search" placeholder={placeholder} value={search} onChange={onChangeHandler} className={styles.input} />
      <button type="submit" disabled={isDisabled} className={styles.button}>
        Search
      </button>
    </form>
  );
};
