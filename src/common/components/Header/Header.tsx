import { Button } from "@/common/components";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

type Props = {
  toggleTheme: () => void;
};

export const Header = ({ toggleTheme }: Props) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <Button className={styles.themeToggle} aria-label="Toggle theme" type="button" onClick={toggleTheme}>
        <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </Button>
    </header>
  );
};
