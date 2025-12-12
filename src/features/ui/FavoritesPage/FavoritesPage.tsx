import styles from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
  return (
    <main aria-label="Favorites page" className={styles.page}>
      <h1>Favorites</h1>
      <p className={styles.message}>Your favorite movies will appear here...</p>
    </main>
  );
};
