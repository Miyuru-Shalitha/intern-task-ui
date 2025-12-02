import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
// import DebugWindowPropsDisplay from "../debug/DebugWindowPropsDisplay";

export default function Layout() {
  return (
    <>
      {/* TODO(Miyuru): Comment this out for the release build. */}
      {/* NOTE(Miyuru): This is just to display useful values for debugging as 
                        a little window at the top right corner of the window. */}
      {/* <DebugWindowPropsDisplay /> */}

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}