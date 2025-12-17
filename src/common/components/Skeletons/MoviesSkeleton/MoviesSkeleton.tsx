import { nanoid } from "@reduxjs/toolkit";
import { Skeleton } from "@mui/material";
import styles from "./MoviesSkeleton.module.css";

type Props = {
  count?: number;
};

export const MoviesSkeleton = ({ count = 6 }: Props) => {
  return (
    <div className={styles.container}>
      <Skeleton
        variant="text"
        width={200}
        height={32}
        className={styles.titleSkeleton}
        animation="wave"
      />
      <ul className={styles.moviesList}>
        {Array.from({ length: count }).map((_, index) => (
          <li key={nanoid()} className={styles.movieCardSkeleton}>
            <div className={styles.posterWrapper}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                className={styles.posterSkeleton}
                animation="wave"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              />
            </div>
            <div className={styles.infoSkeleton}>
              <Skeleton
                variant="text"
                width="80%"
                height={20}
                className={styles.movieTitleSkeleton}
                animation="wave"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
