import { Footer, Header } from "@/common/components";
import { Routing } from "@/common/routing";
import { getTheme } from "@/common/theme/theme";
import type { ThemeMode } from "@/common/types";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import styles from "./App.module.css";
import { initThemeLS, toggleThemeLS } from "@/common/utils/localStorage";

const defaultThemeMode = "light";
const initialThemeMode = initThemeLS(defaultThemeMode as ThemeMode);

export const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);
  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  const toggleTheme = () => {
    const newThemeMode = toggleThemeLS();
    setThemeMode(newThemeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
        <Header toggleTheme={toggleTheme} />
        {/* {isGlobalLoading && <LinearProgress />} */}

        <div className={styles.content}>
          <Routing />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
