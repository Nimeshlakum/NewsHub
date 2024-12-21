import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FullArtical from "./pages/FullArtical";
import DataContextProvider from "./context/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route
          path="full-article/:articlepublishedAt"
          element={<FullArtical />}
        />
      </Routes>
    </DataContextProvider>
  );
}

export default App;
