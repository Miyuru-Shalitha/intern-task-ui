import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/common/Layout";
import WindowContextProvider from "./context/WindowContext";
import CustomThemeContextProvider from "./context/CustomThemeContext";

export default function App() {
  return (
    <CustomThemeContextProvider>
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
    </CustomThemeContextProvider>
  );
}