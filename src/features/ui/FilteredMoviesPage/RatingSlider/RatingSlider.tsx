import Slider from "@mui/material/Slider";
import { useState } from "react";

export const RatingSlider = () => {
  const [value, setValue] = useState<number[]>([0, 10]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <span>Rating</span>
        <span>
          {value[0]} - {value[1]}
        </span>
      </div>
      <Slider value={value} onChange={handleChange} step={0.1} />
    </div>
  );
};
