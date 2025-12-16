import { Skeleton } from "@mui/material";
import styles from "./WelcomeSectionSkeleton.module.css";

export const WelcomeSectionSkeleton = () => {
  return (
    <section className={styles.section}>
      <Skeleton
        variant="text"
        width={600}
        height={56}
        className={styles.titleSkeleton}
        animation="wave"
      />
      <Skeleton
        variant="text"
        width={500}
        height={32}
        className={styles.subtitleSkeleton}
        animation="wave"
      />
      <div className={styles.searchInputWrapper}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={56}
          className={styles.searchInputSkeleton}
          animation="wave"
        />
      </div>
    </section>
  );
};

