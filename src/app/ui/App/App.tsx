import { Footer, Header } from "@/common/components";
import { Routing } from "@/common/routing";

import styles from "./App.module.css";
import { getTheme } from "@/common/theme";
import { getThemeMode } from "@/common/utils/localStorage";
import { ThemeProvider } from "@mui/material/styles";

export const App = () => {
  const theme = getTheme(getThemeMode());

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Routing />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
