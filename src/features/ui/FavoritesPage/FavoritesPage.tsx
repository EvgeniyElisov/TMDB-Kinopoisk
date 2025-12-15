import { MoviesList } from "@/common/components";
import { loadFavorites } from "@/common/utils";
import type { Movie } from "@/features/api/moviesApi.types";
import { useEffect, useState } from "react";
import styles from "./FavoritesPage.module.css";



export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const handleFavoritesChange = () => {
    setFavorites(loadFavorites());
  };

  useEffect(() => {
    setFavorites(loadFavorites());
    window.addEventListener("favoritesChanged", handleFavoritesChange);
    return () => {
      window.removeEventListener("favoritesChanged", handleFavoritesChange);
    };
  }, []);

  return (
    <main aria-label="Favorites page" className={styles.page}>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <MoviesList movies={favorites} title="Favorite movies" columns={6} />
      ) : (
        <p className={styles.message}>Your favorite movies will appear here...</p>
      )}
    </main>
  );
};
