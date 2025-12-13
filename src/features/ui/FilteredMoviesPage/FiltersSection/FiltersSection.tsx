import { GenresSection } from "../GenresSection";
import { RatingSlider } from "../RatingSlider";
import { SortBy } from "../SortBy";

export const FiltersSection = () => {
  return (
    <>
      <h2>Filters/Sort</h2>
      <SortBy />
      <RatingSlider />
      <GenresSection />
      <button type="button">Reset filters</button>
    </>
  );
};
