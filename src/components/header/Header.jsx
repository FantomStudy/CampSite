import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header>
        <h1 className="logoText">
          CAMP<span style={{ color: "var(--primary)" }}>/</span>
        </h1>
        <ul
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <li>
            <Link to="/CampSite/">Hello</Link>
          </li>
          <li>
            <Link to="/CampSite/about">About</Link>
          </li>
          <li>
            <Link to="/CampSite/news">News</Link>
          </li>
        </ul>
        <button className="headerButton">Sign in</button>
        <button
          className={`burgerBtn ${isOpen ? "active" : ""}`}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
