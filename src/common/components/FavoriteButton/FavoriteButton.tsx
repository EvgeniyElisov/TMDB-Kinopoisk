import { Button } from "@/common/components";
import styles from "./FavoriteButton.module.css";

type Props = {
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
  changeFavorite: () => void;
};

export const FavoriteButton = ({ isFavorite, changeFavorite }: Props) => {

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    changeFavorite();
  };

  return (
    <Button
      className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`}
      onClick={handleFavoriteClick}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      type="button"
    >
      {isFavorite ? "❤️" : "🤍"}
    </Button>
  );
};
