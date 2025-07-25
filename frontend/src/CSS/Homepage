import React, { useState } from "react";
import TopNav from "./TopNav";
import "./CSS/Homepage.css";

import sideswordIcon from "./assets/sidesword.png";
import longswordIcon from "./assets/longsword.png";
import rapierIcon from "./assets/rapier.png";
import sabreIcon from "./assets/sabre.png";

const tournaments = [
  { name: "Sidesword Open", icon: sideswordIcon },
  { name: "Longsword Open", icon: longswordIcon },
  { name: "Rapier Open", icon: rapierIcon },
  { name: "Sabre Open", icon: sabreIcon },
  { name: "Sidesword Women", icon: sideswordIcon },
  { name: "Longsword Women", icon: longswordIcon },
  { name: "Rapier Women", icon: rapierIcon },
  { name: "Sabre Women", icon: sabreIcon },
];

const podium = [
  {
    medal: "🥇",
    initials: "AF",
    name: "Alvina Frassi",
    flag: "🇮🇹",
    sala: "Nome sala",
    id: "12123",
    color: "#2ecc71"
  },
  {
    medal: "🥈",
    initials: "FD",
    name: "Fabrizio Danese",
    flag: "🇮🇹",
    sala: "Nome sala",
    id: "12123",
    color: "#27a3dd"
  },
  {
    medal: "🥉",
    initials: "MC",
    name: "Massimiliano Cappello",
    flag: "🇮🇹",
    sala: "Nome sala",
    id: "12123",
    color: "#c65e56"
  },
];

export default function Homepage() {
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  return (
    <>
      <TopNav active="home" />
      <div className="homepage">
        <div className="homepage-header">
          <h1 className="homepage-title">Leaderboard</h1>
          <select
            className="year-select"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
          >
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
          </select>
        </div>

        <div className="card-grid-container">
          {tournaments.map((tournament, index) => (
            <div className="card-grid-card" key={index}>
              <img
                src={tournament.icon}
                className="card-icon"
                alt={tournament.name}
              />
              <h2 className="card-tournament-name">{tournament.name}</h2>
              <div className="card-podium">
                {podium.map((player, i) => (
                  <div className="card-podium-row" key={i}>
                    <span className="card-medal">{player.medal}</span>
                    <span
                      className="card-avatar"
                      style={{ backgroundColor: player.color }}
                    >
                      {player.initials}
                    </span>
                    <span className="card-player-name">{player.name}</span>
                    <span className="card-flag">{player.flag}</span>
                    <span className="card-player-id">{player.id}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
