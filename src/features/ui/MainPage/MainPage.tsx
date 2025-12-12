import { MoviesSection } from "./MoviesSection";
import { WelcomeSection } from "./WelcomeSection";

export const MainPage = () => {
  return (
    <main aria-label="Main page">
      <WelcomeSection />
      <MoviesSection />
    </main>
  );
};
