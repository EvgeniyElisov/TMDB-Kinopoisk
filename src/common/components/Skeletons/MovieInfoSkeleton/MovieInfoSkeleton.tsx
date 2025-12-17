import { nanoid } from "@reduxjs/toolkit";
import { Skeleton } from "@mui/material";
import styles from "./MovieInfoSkeleton.module.css";

export const MovieInfoSkeleton = () => {
  return (
    <div className={styles.info}>
      <div className={styles.posterWrapper}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          className={styles.posterSkeleton}
          animation="wave"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <Skeleton
            variant="text"
            width="70%"
            height={40}
            className={styles.titleSkeleton}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={40}
            height={40}
            className={styles.backButtonSkeleton}
            animation="wave"
          />
        </div>
        <div className={styles.meta}>
          <Skeleton
            variant="rectangular"
            width={150}
            height={36}
            className={styles.metaItemSkeleton}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={80}
            height={36}
            className={styles.metaItemSkeleton}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={120}
            height={36}
            className={styles.metaItemSkeleton}
            animation="wave"
          />
        </div>
        <div className={styles.overviewWrapper}>
          <Skeleton
            variant="text"
            width="100%"
            height={20}
            className={styles.overviewLine}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="100%"
            height={20}
            className={styles.overviewLine}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="90%"
            height={20}
            className={styles.overviewLine}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="85%"
            height={20}
            className={styles.overviewLine}
            animation="wave"
          />
        </div>
        <div className={styles.genres}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={nanoid()}
              variant="rectangular"
              width={Math.random() * 40 + 80}
              height={36}
              className={styles.genreSkeleton}
              animation="wave"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
