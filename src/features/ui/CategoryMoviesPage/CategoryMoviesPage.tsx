import { Outlet } from "react-router";
import { Categories } from "./Categories";

export const CategoryMoviesPage = () => {
  return (
    <main aria-label="Category movies page">
      <Categories />
      <Outlet />
    </main>
  );
};
