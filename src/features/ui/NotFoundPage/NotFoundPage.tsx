import { PagePaths } from "@/common/types";
import { NavLink } from "react-router";
import styles from "./NotFoundPage.module.css";
import { scrollToTop } from "@/common/utils";

export const NotFoundPage = () => {
  return (
    <main aria-label="Page not found" className={styles.page}>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.description}>
          We could not find the page you were looking for. It might have been removed, renamed, or never existed.
        </p>
        <div className={styles.actions}>
          <NavLink to={PagePaths.Main} className={styles.primaryAction} aria-label="Go to main page" onClick={scrollToTop}>
            Go to main page
          </NavLink>
        </div>
      </div>
    </main>
  );
};

