import styles from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
  return (
    <main aria-label="Избранные фильмы" tabIndex={0} role="main" className={styles.page}>
      <h1>Favorites</h1>
      <p className={styles.message}>Your favorite movies will appear here...</p>
    </main>
  );
};
