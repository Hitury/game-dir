import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ExplorerPage from "@/pages/explorer";
import ProfilePage from "@/pages/profiles";
import GameInfo from "@/pages/game-info";
import ProfileUI from "@/pages/profile-ui";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import LoginPage from "@/pages/login";
import SupportPage from "@/pages/support";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ExplorerPage />} path="/explorer" />
      <Route element={<ProfilePage />} path="/profiles" />
      <Route element={<GameInfo />} path="/game-info" />
      <Route element={<ProfileUI />} path="/profile-ui" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SupportPage />} path="/support" />
    </Routes>
  );
}

export default App;
