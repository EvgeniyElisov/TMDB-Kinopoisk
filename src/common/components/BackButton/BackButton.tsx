import { useNavigate } from "react-router";
import styles from "./BackButton.module.css";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      className={styles.backButton}
      onClick={handleBackClick}
      aria-label="Go back to previous page"
      type="button"
    >
      ← Back
    </button>
  );
};
