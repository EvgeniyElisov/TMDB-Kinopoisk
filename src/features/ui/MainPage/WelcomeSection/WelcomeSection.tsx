import styles from "./WelcomeSection.module.css";
import { useGetPopularMoviesQuery } from "@/features/api/moviesApi";
import { getRandomBackdrop } from "@/common/utils";
import { SearchInput } from "@/common/components";

export const WelcomeSection = () => {
  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
  const randomBackdrop = getRandomBackdrop(popularMoviesData?.results || []);
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${randomBackdrop || ""})` }}>
      <h1 className={styles.title}>Welcome to the TMDB Kinopoisk</h1>
      <h2 className={styles.subtitle}>Browse the latest movies and TV shows</h2>
      <SearchInput placeholder="Search movie..." />
    </section>
  );
};
