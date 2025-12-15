import { Footer, Header } from "@/common/components";
import { useGlobalLoading } from "@/common/hooks";
import { Routing } from "@/common/routing";
import { getTheme } from "@/common/theme/theme";
import type { ThemeMode } from "@/common/types";
import { initThemeLS, toggleThemeLS } from "@/common/utils/localStorage";
import { Box, CssBaseline, LinearProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const initialThemeMode = initThemeLS();
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);
  const theme = getTheme(themeMode);
  const isGlobalLoading = useGlobalLoading();

  const toggleTheme = () => {
    const newThemeMode = toggleThemeLS();
    setThemeMode(newThemeMode);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
        <Header toggleTheme={toggleTheme} />
        {isGlobalLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        <div className={styles.content}>
          <Routing />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
