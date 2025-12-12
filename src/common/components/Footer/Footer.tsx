import tmdbLogo from "@/assets/images/tmdb-logo.svg";
import styles from "./Footer.module.css";

const externalLinks = [
  { label: "TMDB", href: "https://www.themoviedb.org/", ariaLabel: "Open The Movie Database website" },
  { label: "Terms", href: "https://www.themoviedb.org/terms-of-use", ariaLabel: "Go to terms of use" },
];

const openLink = (href: string) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

export const Footer = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    openLink(href);
  };

  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.content}>
        <div className={styles.brandBlock}>
          <div className={styles.logoBlock}>
            <img src={tmdbLogo} alt="TMDB logo" className={styles.logo} loading="lazy" />
            <div className={styles.brandText} aria-label="TMDB Kinopoisk Demo" tabIndex={0}>
              <span className={styles.brandSubtitle}>Data courtesy of TMDB</span>
            </div>
          </div>
          <p className={styles.tagline} tabIndex={0}>
            Discover trends, curated picks, and fresh releases—without the noise.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Quick links">
          {externalLinks.map(({ label, href, ariaLabel }) => (
            <a key={label} href={href} tabIndex={0} aria-label={ariaLabel} className={styles.link} onClick={(event) => handleClick(event, href)}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.meta} aria-label="Legal information" tabIndex={0}>
          <span>© 2025 TMDB Kinopoisk Demo</span>
        </div>
      </div>
    </footer>
  );
};
