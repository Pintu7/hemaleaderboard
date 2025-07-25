import React, { useState } from 'react';
import TopNav from "./TopNav";
import './CSS/Leaderboard.css';

const categoryOptions = ["Open", "Women"];
const weaponOptions = ["Sabre", "Longsword", "Sidesword", "Rapier"];
const seasonOptions = ["2024-2025", "2025-2026", "2026-2027"];

const podiumData = [
  {
    pos: 2,
    initials: "IC",
    name: "Irene Caldi",
    points: 2000,
    club: "Comense scherma",
    topStages: [
      { name: "Ill lake hema", score: "+121", url: "#" },
      { name: "Hemargenza", score: "+121", url: "#" },
      { name: "Mutinaensis", score: "+121", url: "#" }
    ]
  },
  {
    pos: 1,
    initials: "MM",
    name: "Martina Molteni",
    points: 3000,
    club: "Comense scherma",
    topStages: [
      { name: "Hemargenza", score: "+121", url: "#" },
      { name: "Firenze", score: "+121", url: "#" },
      { name: "HEMA Ravenna", score: "+121", url: "#" }
    ]
  },
  {
    pos: 3,
    initials: "AG",
    name: "Alessandra Ghedini",
    points: 1989,
    club: "HEMA Ravenna",
    topStages: [
      { name: "Mutinaensis", score: "+121", url: "#" },
      { name: "Ill lake hema", score: "+121", url: "#" },
      { name: "Hemargenza", score: "+121", url: "#" }
    ]
  }
];

const orderedPodium = [podiumData[0], podiumData[1], podiumData[2]];

const allAthletes = [
  {
    id: 4,
    initials: "IP",
    name: "Isabella Panzera",
    nationality: "it",
    club: "Sala Milano",
    points: 2114424,
    bestStages: [
      { name: "Longsword Firenze", url: "#" },
      { name: "HEMA Ravenna", url: "#" },
      { name: "Sabre Open", url: "#" }
    ],
    performances: 4,
    prizes: ["🥇", "🥈"]
  },
  {
    id: 5,
    initials: "MK",
    name: "Melissa Kleiss",
    nationality: "de",
    club: "Hamburg HEMA",
    points: 2110424,
    bestStages: [
      { name: "Rapier Berlin", url: "#" },
      { name: "HEMA Munich", url: "#" },
      { name: "Sidesword Women", url: "#" }
    ],
    performances: 3,
    prizes: ["🥉", "🥉", "🥈"]
  },
  {
    id: 6,
    initials: "CB",
    name: "Clizia Buniotto",
    nationality: "it",
    club: "Sala Torino",
    points: 1888000,
    bestStages: [
      { name: "Longsword Torino", url: "#" },
      { name: "HEMA Ravenna", url: "#" },
      { name: "Sidesword Open", url: "#" }
    ],
    performances: 2,
    prizes: []
  },
  {
    id: 7,
    initials: "AC",
    name: "Anna Carnevali",
    nationality: "it",
    club: "Comense scherma",
    points: 1750000,
    bestStages: [
      { name: "Open Varese", url: "#" },
      { name: "Rapier Women", url: "#" },
      { name: "Firenze", url: "#" }
    ],
    performances: 2,
    prizes: ["🥇"]
  },
  {
    id: 8,
    initials: "EC",
    name: "Erica Castiglioni",
    nationality: "it",
    club: "Accademia HEMA",
    points: 1700022,
    bestStages: [
      { name: "Sidesword Open", url: "#" },
      { name: "Rapier Open", url: "#" },
      { name: "Rapier Women", url: "#" }
    ],
    performances: 2,
    prizes: ["🥉"]
  },
  {
    id: 9,
    initials: "AF",
    name: "Alvina Frassi",
    nationality: "it",
    club: "Brescia HEMA",
    points: 1520022,
    bestStages: [
      { name: "Rapier Open", url: "#" },
      { name: "HEMA Brescia", url: "#" },
      { name: "HEMA Ravenna", url: "#" }
    ],
    performances: 2,
    prizes: ["🥇", "🥈"]
  },
  {
    id: 10,
    initials: "FD",
    name: "Fabrizia Danese",
    nationality: "it",
    club: "Firenze",
    points: 1514022,
    bestStages: [
      { name: "Firenze", url: "#" },
      { name: "Open Varese", url: "#" },
      { name: "Sabre Open", url: "#" }
    ],
    performances: 3,
    prizes: ["🥉"]
  }
];

function getFlagEmoji(countryCode) {
  if (!countryCode) return "";
  const codePoints = countryCode.toUpperCase().split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function Leaderboard() {
  const [selectedCategory, setSelectedCategory] = useState("Women");
  const [selectedWeapon, setSelectedWeapon] = useState("Longsword");
  const [selectedSeason, setSelectedSeason] = useState("2024-2025");

  const filteredAthletes = allAthletes;

  return (
    <>
      <TopNav active="leaderboards" />
      <div className="leaderboard-page">
        <div className="leaderboard-filters-row">
          <div className="filter-block">
            <span className="filter-label">Categoria</span>
            <div className="filter-group">
              {categoryOptions.map(opt => (
                <button
                  key={opt}
                  className={`filter-btn${selectedCategory === opt ? " selected" : ""}`}
                  onClick={() => setSelectedCategory(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-block">
            <span className="filter-label">Arma</span>
            <div className="filter-group">
              {weaponOptions.map(opt => (
                <button
                  key={opt}
                  className={`filter-btn${selectedWeapon === opt ? " selected" : ""}`}
                  onClick={() => setSelectedWeapon(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <select
            className="year-select"
            value={selectedSeason}
            onChange={e => setSelectedSeason(e.target.value)}
          >
            {seasonOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        <section className="podium">
          <div className="podium-place place-2">
            <div className="avatar-placeholder second"><span>{orderedPodium[0].initials}</span></div>
            <div className="position-cup">
              <span className="silver">🥈</span>
            </div>
            <div className="podium-athlete-name">{orderedPodium[0].name}</div>
            <div className="points">{orderedPodium[0].points} punti</div>
            <div className="athlete-club">{orderedPodium[0].club}</div>
            <ol className="top-stages">
              {orderedPodium[0].topStages.map((stage, i) => (
                <li key={i}>
                  <a
                    href={stage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stage-chip"
                  >
                    {stage.name}
                  </a>
                  <span className="stage-score">{stage.score}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="podium-place place-1">
            <div className="avatar-placeholder first"><span>{orderedPodium[1].initials}</span></div>
            <div className="position-cup">
              <span className="gold">🥇</span>
            </div>
            <div className="podium-athlete-name">{orderedPodium[1].name}</div>
            <div className="points">{orderedPodium[1].points} punti</div>
            <div className="athlete-club">{orderedPodium[1].club}</div>
            <ol className="top-stages">
              {orderedPodium[1].topStages.map((stage, i) => (
                <li key={i}>
                  <a
                    href={stage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stage-chip"
                  >
                    {stage.name}
                  </a>
                  <span className="stage-score">{stage.score}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="podium-place place-3">
            <div className="avatar-placeholder third"><span>{orderedPodium[2].initials}</span></div>
            <div className="position-cup">
              <span className="bronze">🥉</span>
            </div>
            <div className="podium-athlete-name">{orderedPodium[2].name}</div>
            <div className="points">{orderedPodium[2].points} punti</div>
            <div className="athlete-club">{orderedPodium[2].club}</div>
            <ol className="top-stages">
              {orderedPodium[2].topStages.map((stage, i) => (
                <li key={i}>
                  <a
                    href={stage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stage-chip"
                  >
                    {stage.name}
                  </a>
                  <span className="stage-score">{stage.score}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="leaderboard-table-section">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Athlete</th>
                <th>Nationality</th>
                <th>City/Club</th>
                <th>Points</th>
                <th>Best performances</th>
                <th>Premi</th>
              </tr>
            </thead>
            <tbody>
              {filteredAthletes.map((row, idx) => (
                <tr key={row.id}>
                  <td>{idx + 4}</td>
                  <td>
                    <span className="initials">{row.initials}</span>
                    {row.name}
                    <span className="club">{row.club}</span>
                  </td>
                  <td>{getFlagEmoji(row.nationality)}</td>
                  <td>{row.club}</td>
                  <td>{row.points.toLocaleString('it-IT')}</td>
                  <td className="best-perfs-cell">
                    {row.bestStages.map((s, i) => (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="stage-chip"
                      >
                        {s.name}
                      </a>
                    ))}
                  </td>
                  <td>
                    {row.prizes && row.prizes.map((prize, i) => (
                      <span
                        className={
                          prize === "🥇" ? "prize-icon gold"
                          : prize === "🥈" ? "prize-icon silver"
                          : "prize-icon bronze"
                        }
                        key={i}
                      >
                        {prize}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
