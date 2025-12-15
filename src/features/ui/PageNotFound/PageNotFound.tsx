import { useNavigate } from "react-router";
import styles from "./PageNotFound.module.css";
import { PagePaths } from "@/common/types";

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(PagePaths.Main);
  };

  return (
    <main className={styles.container} aria-label="Page not found">
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.description}>
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <button
          className={styles.homeButton}
          onClick={handleGoHome}
          aria-label="Go to home page"
          type="button"
        >
          Вернуться на главную
        </button>
      </div>
    </main>
  );
};
