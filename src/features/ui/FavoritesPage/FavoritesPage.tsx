import { favoritesStorageKey } from "@/common/constants";
import styles from "./FavoritesPage.module.css";
import { MoviesList, Paginator } from "@/common/components";
import { useEffect, useState, type ChangeEvent } from "react";
import type { Movie } from "@/features/api/moviesApi.types";

export const FavoritesPage = () => {
  
  const [favorites, setFavorites] = useState<Movie[]>([]);
  useEffect(() => {
    const favorites = localStorage.getItem(favoritesStorageKey);
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
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
