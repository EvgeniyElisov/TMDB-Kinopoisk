import { Skeleton } from "@mui/material";
import styles from "./FiltersSectionSkeleton.module.css";

export const FiltersSectionSkeleton = () => {
  return (
    <aside className={styles.filtersSection} aria-label="Filters skeleton">
      <Skeleton
        variant="text"
        width={150}
        height={32}
        className={styles.titleSkeleton}
        animation="wave"
      />
      <div className={styles.sortBySkeleton}>
        <Skeleton
          variant="text"
          width={80}
          height={20}
          className={styles.labelSkeleton}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={40}
          className={styles.selectSkeleton}
          animation="wave"
        />
      </div>
      <div className={styles.ratingSliderSkeleton}>
        <div className={styles.ratingHeaderSkeleton}>
          <Skeleton
            variant="text"
            width={60}
            height={20}
            className={styles.ratingLabelSkeleton}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width={80}
            height={20}
            className={styles.ratingValueSkeleton}
            animation="wave"
          />
        </div>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={8}
          className={styles.sliderSkeleton}
          animation="wave"
        />
      </div>
      <div className={styles.genresSectionSkeleton}>
        <div className={styles.genresContainerSkeleton}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={80}
              height={36}
              className={styles.genreButtonSkeleton}
              animation="wave"
              style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={44}
        className={styles.resetButtonSkeleton}
        animation="wave"
      />
    </aside>
  );
};

