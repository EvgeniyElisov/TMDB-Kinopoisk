import { Skeleton } from "@mui/material";
import styles from "./GenresSkeleton.module.css";

type Props = {
  count?: number;
};

export const GenresSkeleton = ({ count = 10 }: Props) => {
  const skeletonWidth = 60;
  const skeletonHeight = 80;
  return (
    <div className={styles.genresSection}>
      <div className={styles.genresContainer}>
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={Math.random() * skeletonWidth + skeletonHeight}
            height={36}
            className={styles.genreSkeleton}
            animation="wave"
            style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};
