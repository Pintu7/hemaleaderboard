// TournamentLeaderboard.jsx
import React, { useState } from "react";
import TopNav from "./TopNav";
import "./CSS/TournamentLeaderboard.css";

const CATEGORIES = ["Open", "Women"];
const DISCIPLINES = ["Longsword", "Sabre", "Sidesword", "Rapier"];

// Medals for top 4: oro, argento, bronzo, bronzo (per 4o posto)
const MEDALS = ["🥇", "🥈", "🥉", "🥉"];

// 30 atleti di esempio (puoi aggiungere o modificare a piacere)
const ATHLETES = [
  // --- Prime 4 posizioni ---
  {
    id: 1, initials: "MM", name: "Martina Molteni", nationality: "it", club: "Comense scherma", points: 690,
    wins: 4, losses: 4, differential: 16, category: "Women", discipline: "Longsword",
    medals: ["🥇"], bestStages: [
      { name: "Lake Hema", url: "#" }, { name: "Ravenna", url: "#" }, { name: "Firenze", url: "#" }
    ]
  },
  {
    id: 2, initials: "FN", name: "Fabrizia Neri", nationality: "it", club: "Sala Torino", points: 650,
    wins: 5, losses: 3, differential: 10, category: "Women", discipline: "Longsword",
    medals: ["🥈"], bestStages: [
      { name: "Sabre Open", url: "#" }, { name: "Torino", url: "#" }, { name: "Longsword Nationals", url: "#" }
    ]
  },
  {
    id: 3, initials: "AG", name: "Alessandra Ghedini", nationality: "de", club: "HEMA Berlin", points: 633,
    wins: 4, losses: 4, differential: 7, category: "Women", discipline: "Longsword",
    medals: ["🥉"], bestStages: [
      { name: "Lake Hema", url: "#" }, { name: "Sabre Open", url: "#" }, { name: "Rapier Nationals", url: "#" }
    ]
  },
  {
    id: 4, initials: "CB", name: "Chiara Bianchi", nationality: "fr", club: "Accademia HEMA", points: 628,
    wins: 6, losses: 2, differential: 9, category: "Women", discipline: "Longsword",
    medals: ["🥉"], bestStages: [
      { name: "Lake Hema", url: "#" }, { name: "Ravenna", url: "#" }, { name: "Sidesword Open", url: "#" }
    ]
  },
  // ---- Altri atleti (da 5 a 30, senza medaglietta) ----
  ...Array.from({ length: 26 }, (_, i) => ({
    id: 5 + i,
    initials: `XX${i + 5}`,
    name: `Nome Cognome${i + 5}`,
    nationality: (["it","de","fr","uk","es"])[i % 5],
    club: `Sala ${["Torino", "Milano", "Como", "Roma"][i % 4]}`,
    points: 600 - i * 7,
    wins: 3 + (i % 6),
    losses: 2 + (i % 4),
    differential: 0 + (i % 20),
    category: CATEGORIES[(i + 1) % 2],
    discipline: DISCIPLINES[i % 4],
    medals: [],
    bestStages: [
      { name: `Evento ${i + 1}`, url: "#" },
      { name: `Stage ${i + 1}`, url: "#" },
      { name: `Tappa ${i + 1}`, url: "#" }
    ]
  }))
];

function getFlagEmoji(countryCode) {
  if (!countryCode) return "";
  const codePoints = countryCode.toUpperCase().split("")
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function TournamentLeaderboard() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedDiscipline, setSelectedDiscipline] = useState(DISCIPLINES[0]);

  // Ordina per punti decrescenti e poi filtra
  const filtered = ATHLETES
    .filter(a => a.category === selectedCategory && a.discipline === selectedDiscipline)
    .sort((a, b) => b.points - a.points);

  return (
    <>
      <TopNav active="tournaments" />
      <div className="tournament-leaderboard-page">
        <h1 className="tlb-title">III Lake Hema — Classifica</h1>
        <div className="tlb-filters-row">
          <div className="tlb-filter-block">
            <span className="tlb-filter-label">Categoria</span>
            <div className="tlb-filter-group">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`tlb-filter-btn${selectedCategory === cat ? " selected" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="tlb-filter-block">
            <span className="tlb-filter-label">Disciplina</span>
            <div className="tlb-filter-group">
              {DISCIPLINES.map(dsc => (
                <button
                  key={dsc}
                  className={`tlb-filter-btn${selectedDiscipline === dsc ? " selected" : ""}`}
                  onClick={() => setSelectedDiscipline(dsc)}
                >
                  {dsc}
                </button>
              ))}
            </div>
          </div>
        </div>
        <section className="tlb-leaderboard-table-section">
          <table className="tlb-leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>Atleta</th>
                <th>Nazionalità</th>
                <th>Società</th>
                <th>Punti</th>
                <th>Vittorie</th>
                <th>Sconfitte</th>
                <th>Differenziale</th>
                <th>Best performances</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={row.id}>
                  <td>{idx + 1}</td>
                  <td>
                    {idx < 4 ? (
                      <span className={`tlb-medal tlb-medal-pos${idx + 1}`}>
                        {MEDALS[idx]}
                      </span>
                    ) : null}
                  </td>
                  <td>
                    <span className="tlb-initials">{row.initials}</span>
                    {row.name}
                  </td>
                  <td>{getFlagEmoji(row.nationality)}</td>
                  <td>{row.club}</td>
                  <td>{row.points}</td>
                  <td>{row.wins}</td>
                  <td>{row.losses}</td>
                  <td>{row.differential}</td>
                  <td className="best-perfs-cell">
                    {row.bestStages.map((stage, i) => (
                      <a
                        key={i}
                        href={stage.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="stage-chip"
                      >
                        {stage.name}
                      </a>
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
