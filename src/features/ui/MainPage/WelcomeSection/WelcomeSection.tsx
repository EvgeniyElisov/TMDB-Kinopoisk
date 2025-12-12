import { SearchInput } from "@/common/components";
import styles from "./WelcomeSection.module.css";

export const WelcomeSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Welcome to the TMDB Kinopoisk</h1>
      <h2 className={styles.subtitle}>Browse the latest movies and TV shows</h2>
      <SearchInput />
    </section>
  );
};
