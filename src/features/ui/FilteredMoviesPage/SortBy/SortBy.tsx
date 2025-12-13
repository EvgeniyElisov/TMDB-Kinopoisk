import type { SortByValues } from "@/features/api/moviesApi.types";
import styles from "./SortBy.module.css";

const sortByOptions: { value: SortByValues; label: string }[] = [
  { value: "popularity.asc", label: "Popularity ↑" },
  { value: "popularity.desc", label: "Popularity ↓" },
  { value: "title.asc", label: "Title ↑" },
  { value: "title.desc", label: "Title ↓" },
  { value: "revenue.asc", label: "Revenue ↑" },
  { value: "revenue.desc", label: "Revenue ↓" },
  { value: "primary_release_date.asc", label: "Primary release date ↑" },
  { value: "primary_release_date.desc", label: "Primary release date ↓" },
  { value: "original_title.asc", label: "Original title ↑" },
  { value: "original_title.desc", label: "Original title ↓" },
  { value: "vote_average.asc", label: "Vote average ↑" },
  { value: "vote_average.desc", label: "Vote average ↓" },
  { value: "vote_count.asc", label: "Vote count ↑" },
  { value: "vote_count.desc", label: "Vote count ↓" },
];

export const SortBy = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Sort by</label>
      <select className={styles.select}>
        {sortByOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
