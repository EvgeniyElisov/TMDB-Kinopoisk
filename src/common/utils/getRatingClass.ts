export const getRatingClass = (rating: number) => {
  if (rating < 5) {
    return "ratingLow";
  }
  if (rating >= 5 && rating <= 8) {
    return "ratingMedium";
  }
  return "ratingHigh";
};
