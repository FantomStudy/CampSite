import "./App.css";
import Header from "./components/header/Header";
import HelloPage from "./pages/helloPage/HelloPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NewsPage from "./pages/newsPage/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/CampSite/" element={<HelloPage />} />
          <Route path="/CampSite/about" element={<AboutPage />} />
          <Route path="/CampSite/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
