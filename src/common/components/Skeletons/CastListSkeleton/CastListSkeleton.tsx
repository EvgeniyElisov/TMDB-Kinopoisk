import { Skeleton } from "@mui/material";
import styles from "./CastListSkeleton.module.css";

type Props = {
  count?: number;
};

export const CastListSkeleton = ({ count = 6 }: Props) => {
  return (
    <div className={styles.container}>
      <Skeleton
        variant="text"
        width={120}
        height={32}
        className={styles.titleSkeleton}
        animation="wave"
      />
      <div className={styles.list}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Skeleton
                variant="circular"
                width="100%"
                height="100%"
                className={styles.imageSkeleton}
                animation="wave"
              />
            </div>
            <Skeleton
              variant="text"
              width="80%"
              height={18}
              className={styles.nameSkeleton}
              animation="wave"
            />
            <Skeleton
              variant="text"
              width="60%"
              height={16}
              className={styles.characterSkeleton}
              animation="wave"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
