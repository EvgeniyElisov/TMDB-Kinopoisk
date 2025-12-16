import type { GetFilteredMoviesParams, SortByValues } from "@/features/api/moviesApi.types";
import styles from "./SortBy.module.css";
import { useEffect, useState } from "react";
import { sortByOptions } from "@/common/constants";



type Props = {
  params: GetFilteredMoviesParams;
  setParams: (params: GetFilteredMoviesParams) => void;
};

export const SortBy = ({ params, setParams }: Props) => {
  const sortBy = params.sort_by ?? "popularity.desc";
  const [selectedSortBy, setSelectedSortBy] = useState<SortByValues>(sortBy);

  useEffect(() => {
    setSelectedSortBy(sortBy);
  }, [sortBy]);

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortBy(event.target.value as SortByValues);
  };

  useEffect(() => {
    setParams({ ...params, sort_by: selectedSortBy });
  }, [selectedSortBy]);

  return (
    <fieldset className={styles.container}>
      <legend className="visually-hidden">Sort movies</legend>
      <label className={styles.label} htmlFor="sort-by-select">Sort by</label>
      <select 
        id="sort-by-select"
        className={styles.select} 
        value={selectedSortBy} 
        onChange={handleSortByChange}
        aria-label="Sort movies by"
      >
        {sortByOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
