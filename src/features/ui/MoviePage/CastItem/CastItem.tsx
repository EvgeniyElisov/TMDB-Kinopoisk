import noPoster from "@/assets/images/no-poster.jpg";
import { picturesBaseUrl } from "@/common/constants";
import styles from "./CastItem.module.css";
import type { Cast } from "@/features/api/moviesApi.types";

type Props = {
  cast: Cast;
};

export const CastItem = ({ cast }: Props) => {
  const imgPath = cast.profile_path ? `${picturesBaseUrl}${cast.profile_path}` : noPoster;

  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <img src={imgPath} alt={cast.name} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.name}>{cast.name}</div>
      <div className={styles.character}>{cast.character}</div>
    </div>
  );
};
