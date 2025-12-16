import { Button } from "@/common/components";
import type { Genre, GetFilteredMoviesParams } from "@/features/api/moviesApi.types";
import { useEffect, useState } from "react";
import styles from "./GenresSection.module.css";

type Props = {
  params: GetFilteredMoviesParams;
  setParams: (params: GetFilteredMoviesParams) => void;
  genres: Genre[];
};

export const GenresSection = ({ params, setParams, genres }: Props) => {
  const paramsGenres = params.with_genres || [];
  const [selectedGenres, setSelectedGenres] = useState<number[]>(paramsGenres);

  useEffect(() => {
    setSelectedGenres(params.with_genres || []);
  }, [params.with_genres]);

  const handleGenreToggle = (genreId: number) => {
    if (!selectedGenres.includes(genreId)) {
      setSelectedGenres([...selectedGenres, genreId]);
    } else {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    }
  };

  useEffect(() => {
    if (selectedGenres.length > 0) {
      setParams({ ...params, with_genres: selectedGenres });
    } else {
      const { with_genres, ...restParams } = params;
      setParams(restParams);
    }
  }, [selectedGenres]);


  return (
    <div className={styles.genresSection}>
      <div className={styles.genresContainer}>
        {genres.map((genre) => (
          <Button
            key={genre.id}
            type="button"
            className={`${styles.genreButton} ${selectedGenres.includes(genre.id) ? styles.selected : ""}`}
            onClick={() => handleGenreToggle(genre.id)}
            aria-label={`Toggle ${genre.name} genre`}
            aria-pressed={selectedGenres.includes(genre.id)}
          >
            <span className={styles.genreText}>{genre.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
