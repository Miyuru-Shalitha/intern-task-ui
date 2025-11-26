import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />

          <Route path="" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}