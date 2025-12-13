import Slider from "@mui/material/Slider";
import { useState } from "react";
import styles from "./RatingSlider.module.css";

export const RatingSlider = () => {
  const [value, setValue] = useState<number[]>([0, 10]);

  const handleChange = (_event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  return (
    <div className={styles.ratingSlider}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingLabel}>Rating</span>
        <span className={styles.ratingValue}>
          {value[0]} - {value[1]}
        </span>
      </div>
      <div className={styles.sliderContainer}>
        <Slider value={value} onChange={handleChange} step={0.1} max={10} className={styles.slider} />
      </div>
    </div>
  );
};
