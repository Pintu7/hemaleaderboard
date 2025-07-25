import React from "react";
import logoCsen from "./assets/logo-csen.png"; // Adatta il percorso in base alla struttura delle tue cartelle
import "./CSS/TopNav.css";

export default function TopNav({ active }) {
  return (
    <nav className="topnav">
      <div className="nav-logo">
        <a href="/">
          <img src={logoCsen} alt="Logo CSEN" className="logo-img" />
        </a>
      </div>
      <ul className="nav-links">
        <li className={active === "home" ? "active" : ""}>
          <a href="/Homepage">Home</a>
        </li>
        <li className={active === "leaderboards" ? "active" : ""}>
          <a href="/leaderboard">Leaderboards</a>
        </li>
        <li className={active === "tournaments" ? "active" : ""}>
          <a href="/tournaments">Tournaments</a>
        </li>
        <li className={active === "ruleset" ? "active" : ""}>
          <a href="/ruleset">Ruleset&Faq</a>
        </li>
      </ul>
      <div />
    </nav>
  );
}
