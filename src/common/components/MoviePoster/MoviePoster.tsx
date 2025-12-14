import noPoster from "@/assets/images/no-poster.jpg";
import { picturesBaseUrl } from "@/common/constants";
import styles from "./MoviePoster.module.css";

type Props = {
  posterPath: string | null;
  title: string;
};

export const MoviePoster = ({ posterPath, title }: Props) => {
  const imgPath = posterPath ? `${picturesBaseUrl}${posterPath}` : noPoster;

  return (
    <img src={imgPath} alt={title} className={styles.poster} loading="lazy" />
  );
};
