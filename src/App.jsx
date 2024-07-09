import "./App.css";
import Header from "./components/header/Header";
import HelloPage from "./pages/helloPage/HelloPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/CampSite/" element={<HelloPage />} />
          <Route path="/CampSite/about" element={<AboutPage />} />
          <Route path="/CampSite/news" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}
