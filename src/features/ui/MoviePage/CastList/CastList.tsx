import type { Cast } from "@/features/api/moviesApi.types";
import { CastItem } from "../CastItem";
import styles from "./CastList.module.css";
import { sortBy } from "@/common/utils";

type Props = {
  casts: Cast[];
};

export const CastList = ({ casts }: Props) => {

  const topCast = sortBy(casts, "popularity", 6);

  return (
    <section className={styles.container} aria-labelledby="cast-title">
      <h2 id="casts-title" className={styles.title}>Cast:</h2>
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
