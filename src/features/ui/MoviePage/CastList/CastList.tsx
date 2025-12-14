import type { Cast } from "@/features/api/moviesApi.types";
import { CastItem } from "../CastItem";
import styles from "./CastList.module.css";
import { sortBy } from "@/common/utils";

type Props = {
  cast: Cast[];
};

export const CastList = ({ cast }: Props) => {

  const topCast = sortBy(cast, "popularity", 6);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cast:</h2>
      <div className={styles.list}>
          {topCast.map((castMember: Cast) => (
          <CastItem key={castMember.id} cast={castMember} />
        ))}
      </div>
    </div>
  );
};
