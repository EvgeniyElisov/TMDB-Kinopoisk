import noPhoto from "@/assets/images/no-photo.jpg";
import { Image } from "@/common/components/Image";
import type { Cast } from "@/features/api/moviesApi.types";
import styles from "./CastItem.module.css";

type Props = {
  cast: Cast;
};

export const CastItem = ({ cast }: Props) => {

  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <Image imagePath={cast.profile_path} title={cast.name} noImagePath={noPhoto} className={styles.image}/>
      </div>
      <div className={styles.name}>{cast.name}</div>
      <div className={styles.character}>{cast.character}</div>
    </div>
  );
};
