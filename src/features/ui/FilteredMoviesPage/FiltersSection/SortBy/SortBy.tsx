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
    <div className={styles.container}>
      <label className={styles.label}>Sort by</label>
      <select className={styles.select} value={selectedSortBy} onChange={handleSortByChange}>
        {sortByOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
