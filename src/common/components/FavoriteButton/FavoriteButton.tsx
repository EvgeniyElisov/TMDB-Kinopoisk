import { useState } from "react";
import styles from "./FavoriteButton.module.css";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`}
      onClick={handleFavoriteClick}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      type="button"
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};
