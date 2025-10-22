import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import ExplorerPage from "@/pages/explorer";
import ProfilePage from "@/pages/profiles";
import GameInfo from "@/pages/game-info";
import ProfileUI from "@/pages/profile";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import LoginPage from "@/pages/login";
import SupportPage from "@/pages/support";
import PageWrapper from "./components/PageWrapper";
import SignupPage from "@/pages/signup";
import Callback from "@/pages/callback";
import Checkmail from "@/pages/success";
import SettingsPage from "@/pages/settings";
import testConnection from "@/auth/testconnection"
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    testConnection()
  })
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      {" "}
      <Route element={<IndexPage />} path="/" />{" "}
      <Route element={<ExplorerPage />} path="/explorer" />{" "}
      <Route element={<ProfilePage />} path="/profiles" />{" "}
      <Route element={<GameInfo />} path="/game-info" />{" "}
      <Route element={<ProfileUI />} path="/profile/:username" />{" "}
      <Route element={<AboutPage />} path="/about" />{" "}
      <Route element={<ContactPage />} path="/contact" />{" "}
      <Route element={<SupportPage />} path="/support" />{" "}
      <Route element={<Callback />} path="/callback" />{" "}
      <Route element={<Checkmail />} path="/success" />{" "}
      <Route element={<SettingsPage />} path="/settings" />{" "}
      <Route
        path="/login"
          element={
            <PageWrapper key="login">
              <LoginPage />
            </PageWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <PageWrapper key="signup">
              <SignupPage />
            </PageWrapper>
          }
        />
    </Routes>
    </AnimatePresence>
  );
}
export default App;
