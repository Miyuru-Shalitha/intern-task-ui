import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

export default function App() {
  /* TODO(Miyuru): Find if I can implement the proper theme using mui useTheme
                   or if I should make a custome one. */
  const theme = createTheme({
    // typography: {
    //   fontSize: 16
    // }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />

          <Route path="" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}