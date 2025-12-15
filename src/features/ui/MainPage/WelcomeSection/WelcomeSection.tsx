import styles from "./WelcomeSection.module.css";
import { getRandomBackdrop } from "@/common/utils";
import { SearchInput } from "@/common/components";

type Props = {
  backdrops: string[] ;
};

export const WelcomeSection = ({ backdrops }: Props) => {
  const backdrop = getRandomBackdrop(backdrops);
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${backdrop})` }}>
      <h1 className={styles.title}>Welcome to the TMDB Kinopoisk</h1>
      <h2 className={styles.subtitle}>Browse the latest movies and TV shows</h2>
      <SearchInput placeholder="Search movie..." />
    </section>
  );
};
