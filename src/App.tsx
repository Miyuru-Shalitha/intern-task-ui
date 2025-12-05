import { BrowserRouter, Route, Routes } from "react-router-dom";

import WindowContextProvider from "./context/WindowContext";
import CustomThemeContextProvider from "./context/CustomThemeContext";
import Layout from "./components/common/Layout";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import BookingsPage from "./pages/BookingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import IndividualServicePage from "./pages/IndividualServicePage";

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
              <Route path="/service/:id" element={<IndividualServicePage />} />

              <Route path="/booking" element={<BookingsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
            </Route>
          </Routes>
        </WindowContextProvider>
      </BrowserRouter>
    </CustomThemeContextProvider>
  );
}