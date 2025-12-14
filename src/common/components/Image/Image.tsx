import { picturesBaseUrl } from "@/common/constants";
import styles from "./Image.module.css";

type Props = {
  imagePath: string | null;
  title: string;
  noImagePath: string;
};

export const Image = ({ imagePath, noImagePath, title }: Props) => {
  const imgPath = imagePath ? `${picturesBaseUrl}${imagePath}` : noImagePath;

  return <img src={imgPath} alt={title} className={styles.poster} loading="lazy" />;
};
