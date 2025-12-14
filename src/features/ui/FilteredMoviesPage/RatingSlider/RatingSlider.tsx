import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import styles from "./RatingSlider.module.css";
import type { GetFilteredMoviesParams } from "@/features/api/moviesApi.types";

type Props = {
  params: GetFilteredMoviesParams;
  setParams: (params: GetFilteredMoviesParams) => void;
};

const minRating = 0.0;
const maxRating = 10.0;

export const RatingSlider = ({ params, setParams }: Props) => {
  const voteAverageGte = params["vote_average.gte"] ?? minRating;
  const voteAverageLte = params["vote_average.lte"] ?? maxRating;
  const [rating, setRating] = useState<number[]>([voteAverageGte, voteAverageLte]);

  useEffect(() => {
    setRating([voteAverageGte, voteAverageLte]);
  }, [voteAverageGte, voteAverageLte]);

  const handleChange = (_event: Event, newValue: number[]) => {
    setRating(newValue);
  };

  useEffect(() => {
    setParams({ ...params, "vote_average.gte": rating[0], "vote_average.lte": rating[1] });
  }, [rating]);

  return (
    <div className={styles.ratingSlider}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingLabel}>Rating</span>
        <span className={styles.ratingValue}>
          {rating[0]} - {rating[1]}
        </span>
      </div>
      <div className={styles.sliderContainer}>
        <Slider value={rating} onChange={handleChange} step={0.1} max={maxRating} className={styles.slider} />
      </div>
    </div>
  );
};
