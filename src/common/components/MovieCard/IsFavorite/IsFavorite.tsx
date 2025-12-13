import React from "react";
import styles from "./IsFavorite.module.css";
type Props = {
  isFavorite: boolean;
  handleFavoriteClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const IsFavorite = ({ isFavorite, handleFavoriteClick }: Props) => {
  return (
    <button
      className={styles.favoriteButton}
      onClick={handleFavoriteClick}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      type="button"
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};
