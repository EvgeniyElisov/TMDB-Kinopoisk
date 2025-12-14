import { getRatingClass } from "@/common/utils";
import styles from "./MovieRating.module.css";

type Props = {
  rating: number;
};

export const MovieRating = ({ rating }: Props) => {
  const ratingClass = getRatingClass(rating);

  return (
    <div className={`${styles.rating} ${styles[ratingClass]}`} aria-label={`Rating: ${rating}`}>
      {rating.toFixed(1)}
    </div>
  );
};
