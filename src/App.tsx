import { BrowserRouter, Route, Routes } from "react-router-dom";

import WindowContextProvider from "./context/WindowContext";
import CustomThemeContextProvider from "./context/CustomThemeContext";
import Layout from "./components/common/Layout";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

export default function App() {
  return (
    <CustomThemeContextProvider>
      <BrowserRouter>
        <WindowContextProvider>
          <Routes>
            <Route path="/sign-in" element={<SignInPage />} />

            <Route path="" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/service" element={<ServicePage />} />
            </Route>
          </Routes>
        </WindowContextProvider>
      </BrowserRouter>
    </CustomThemeContextProvider>
  );
}