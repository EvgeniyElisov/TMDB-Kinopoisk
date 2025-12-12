import { CategoriesInfo } from "@/common/constants";
import { NavLink } from "react-router";

export const Categories = () => {
  return (
    <>
      {CategoriesInfo.map((category) => (
        <NavLink key={category.title} to={category.path}>
          {category.title}
        </NavLink>
      ))}
    </>
  );
};
