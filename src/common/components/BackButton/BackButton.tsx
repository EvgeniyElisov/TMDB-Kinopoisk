import { Button } from "@/common/components";
import { useNavigate } from "react-router";
import styles from "./BackButton.module.css";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Button
      className={styles.backButton}
      onClick={handleBackClick}
      aria-label="Go back to previous page"
      type="button"
    >
      ← Back
    </Button>
  );
};
