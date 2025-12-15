import { createTheme } from "@mui/material/styles";
import type { ThemeMode } from "../types";

export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    cssVariables: true,
    palette: {
      mode: themeMode,
      primary: {
        main: "#087EA4",
      },
      ...(themeMode === "light" && {
        background: {
          default: "#f5f5f5",
          paper: "rgba(255, 255, 255, 0)",
        },
      }),
    },
  });
};
