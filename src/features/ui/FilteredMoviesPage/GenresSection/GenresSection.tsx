import { useState } from "react";
import { useGetGenresListQuery } from "@/features/api/moviesApi";
import styles from "./GenresSection.module.css";

export const GenresSection = () => {
  const { data: genresListData } = useGetGenresListQuery({});
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleGenreToggle = (genreId: number) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId) ? prev.filter((id) => id !== genreId) : [...prev, genreId]
    );
  };

  return (
    <div className={styles.genresSection}>
      <div className={styles.genresContainer}>
        {genresListData?.genres.map((genre) => (
          <button
            key={genre.id}
            type="button"
            className={`${styles.genreButton} ${selectedGenres.includes(genre.id) ? styles.selected : ""}`}
            onClick={() => handleGenreToggle(genre.id)}
            aria-label={`Toggle ${genre.name} genre`}
            aria-pressed={selectedGenres.includes(genre.id)}
          >
            <span className={styles.genreText}>{genre.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
