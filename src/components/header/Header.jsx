import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header>
        <h1 className="logoText">
          CAMP<span style={{ color: "var(--primary)" }}>/</span>
        </h1>
        <ul className={`headerNav ${isOpen ? "active" : ""}`}>
          <li>Hello</li>
          <li>About</li>
          <li>News</li>
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
