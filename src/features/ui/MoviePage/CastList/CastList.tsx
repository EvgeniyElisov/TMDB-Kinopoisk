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
    <section className={styles.container} aria-labelledby="cast-title">
      <h2 id="cast-title" className={styles.title}>Cast:</h2>
      <ul className={styles.list} role="list">
          {topCast.map((castMember: Cast) => (
          <li key={castMember.id}>
            <CastItem cast={castMember} />
          </li>
        ))}
      </ul>
    </section>
  );
};
