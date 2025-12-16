import { NavItems } from "@/common/constants";
import { NavigationLink } from "../NavigationLink";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul role="list">
        {NavItems.map((item) => (
          <li key={item.to}>
            <NavigationLink to={item.to} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

