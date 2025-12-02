import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

export interface IColorScheme {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  surface: string;
}

export interface ICustomThemeContextType {
  colors: IColorScheme;
  setColors: Dispatch<SetStateAction<IColorScheme>>;
}

export const CustomThemeContext = createContext<ICustomThemeContextType | undefined>(undefined);

export default function CustomThemeContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [colors, setColors] = useState<IColorScheme>({
    primary: "#000",
    secondary: "#DB002B",
    white: "#FFF",
    black: "#000",
    surface: "#E9E9E9"
  });
  const muiTheme = createTheme({
    typography: {
      fontFamily: "Poppins"
    },
    palette: {
      mode: "light",
      secondary: {
        main: colors.secondary
      },
      background: {
        default: colors.white,
      }
    }
  });

  return (
    <CustomThemeContext.Provider value={{ colors, setColors }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}