import noPhoto from "@/assets/images/no-photo.jpg";
import { Image } from "@/common/components/Image";
import type { Cast } from "@/features/api/moviesApi.types";
import styles from "./CastItem.module.css";

type Props = {
  cast: Cast;
};

export const CastItem = ({ cast }: Props) => {

  return (
    <article className={styles.item}>
      <figure className={styles.imageWrapper}>
        <Image imagePath={cast.profile_path} title={cast.name} noImagePath={noPhoto} className={styles.image}/>
      </figure>
      <h3 className={styles.name}>{cast.name}</h3>
      <p className={styles.character}>{cast.character}</p>
    </article>
  );
};
