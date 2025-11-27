import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/common/Layout";
import WindowContextProvider from "./context/WindowContext";

export default function App() {
  // TODO(Miyuru): Find if I can implement the proper theme using mui useTheme
  //               or if I should make a custome one.
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins"
    },
    palette: {
      mode: "light",
      secondary: {
        main: "#DB002B"
      },
      background: {
        default: "#FFF",
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <WindowContextProvider>
          <Routes>
            <Route path="/sign-in" element={<SignInPage />} />

            <Route path="" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </WindowContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}