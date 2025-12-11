import { selectThemeMode } from "@/app/model/appSlice";
import { Footer, Header } from "@/common/components";
import { useAppSelector } from "@/common/hooks";
import { Routing } from "@/common/routing";
import { getTheme } from "@/common/theme";
import { ThemeProvider } from "@mui/material/styles";

export const App = () => {
  const themeMode = useAppSelector(selectThemeMode);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routing />
      <Footer />
    </ThemeProvider>
  );
};
