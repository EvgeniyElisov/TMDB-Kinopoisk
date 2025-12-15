import { picturesBaseUrl } from "../constants";

export const getRandomBackdrop = (backdrops: string[]) => {
  if (!backdrops) return null;
  const randomIndex = Math.floor(Math.random() * backdrops.length);
  const randomBackdrop = backdrops[randomIndex];
  return `${picturesBaseUrl}${randomBackdrop}`;
};
