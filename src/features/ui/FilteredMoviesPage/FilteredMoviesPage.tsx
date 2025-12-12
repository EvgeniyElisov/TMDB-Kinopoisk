import styles from "./FilteredMoviesPage.module.css";

export const FilteredMoviesPage = () => {
  return (
    <main aria-label="Отфильтрованные фильмы" tabIndex={0} role="main" className={styles.page}>
      <h1>Filtered Movies</h1>
      <p className={styles.message}>Filter functionality coming soon...</p>
    </main>
  );
};
