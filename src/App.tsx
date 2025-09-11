import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ExplorerPage from "@/pages/explorer";
import PricingPage from "@/pages/pricing";
import GameInfo from "@/pages/game-info";
import ProfileUI from "@/pages/profile-ui";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ExplorerPage />} path="/explorer" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<GameInfo />} path="/game-info" />
      <Route element={<ProfileUI />} path="/profile-ui" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
