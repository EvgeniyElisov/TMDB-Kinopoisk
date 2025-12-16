import { picturesBaseUrl } from "@/common/constants";
import styles from "./Image.module.css";

type Props = {
  imagePath: string | null;
  title?: string;
  noImagePath?: string;
  className?: string;
};

export const Image = ({ imagePath, noImagePath, title, className }: Props) => {
  const imgPath = imagePath ? `${picturesBaseUrl}${imagePath}` : noImagePath;
  const altText = title || "Image";

  return <img src={imgPath} alt={altText} className={className || styles.poster} loading="lazy" />;
};
