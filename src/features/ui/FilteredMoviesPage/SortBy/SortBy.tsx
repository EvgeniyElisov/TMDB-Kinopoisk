import type { GetFilteredMoviesParams, SortByValues } from "@/features/api/moviesApi.types";
import styles from "./SortBy.module.css";
import { useEffect, useState } from "react";

const sortByOptions: { value: SortByValues; label: string }[] = [
  { value: "popularity.desc", label: "Popularity ↓" },
  { value: "popularity.asc", label: "Popularity ↑" },
  { value: "title.desc", label: "Title ↓" },
  { value: "title.asc", label: "Title ↑" },
  { value: "revenue.desc", label: "Revenue ↓" },
  { value: "revenue.asc", label: "Revenue ↑" },
  { value: "primary_release_date.desc", label: "Primary release date ↓" },
  { value: "primary_release_date.asc", label: "Primary release date ↑" },
  { value: "original_title.desc", label: "Original title ↓" },
  { value: "original_title.asc", label: "Original title ↑" },
  { value: "vote_average.desc", label: "Vote average ↓" },
  { value: "vote_average.asc", label: "Vote average ↑" },
  { value: "vote_count.desc", label: "Vote count ↓" },
  { value: "vote_count.asc", label: "Vote count ↑" },
];

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
