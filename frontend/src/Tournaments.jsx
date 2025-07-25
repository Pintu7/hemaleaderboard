import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import "./CSS/Tournaments.css";

const TOURNAMENTS = [
  {
    id: "lake-hema-2025",
    title: "III Lake Hema",
    date: "04-10-25 / 05-10-25",
    city: "Como",
    img: "/tournaments/lake-hema-vol3.jpg",
    status: "upcoming",
  },
  {
    id: "lake-hema-2024",
    title: "II Lake Hema",
    date: "05-10-24 / 06-10-24",
    city: "Como",
    img: "/tournaments/lake-hema-vol2.jpg",
    status: "past",
  },
  {
    id: "hemargenza-2025",
    title: "Tappa di Hemargenza",
    date: "25-26 Gennaio 2025",
    city: "Como",
    img: "/tournaments/hemargenza-2025.jpg",
    status: "upcoming",
  },
  {
    id: "lake-hema-workshop-2",
    title: "Lake Hema Workshop Vol 2",
    date: "00.00.2025",
    city: "Como",
    img: "/tournaments/lake-hema-workshop2.jpg",
    status: "upcoming",
  },
  {
    id: "schermastorica-demo",
    title: "Dimostrazione di Scherma Storica",
    date: "14 Settembre 2025",
    city: "Como",
    img: "/tournaments/demo-schermastorica.jpg",
    status: "upcoming",
  },
  {
    id: "lake-hema-2023",
    title: "Lake Hema 2023",
    date: "00.00.2023",
    city: "Como",
    img: "/tournaments/lake-hema-2023.jpg",
    status: "past",
  },
  // Altri tornei...
];

const FILTERS = [
  { label: "All events", value: "all" },
  { label: "Upcoming events", value: "upcoming" },
  { label: "Past events", value: "past" },
];

export default function Tournaments() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const navigate = useNavigate();

  const filteredTournaments =
    selectedFilter === "all"
      ? TOURNAMENTS
      : TOURNAMENTS.filter((t) => t.status === selectedFilter);

  const handleCardClick = (id) => {
    navigate(`/tournament/${id}`);
  };

  return (
    <>
      <TopNav active="tournaments" />
      <div className="tournaments-page">
        <div className="tournaments-filters-row">
          <div className="tournaments-filters-pillbox">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                className={`tournaments-filter-pill${
                  selectedFilter === filter.value ? " selected" : ""
                }`}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="tournament-cards-grid">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="tournament-card"
              tabIndex={0}
              role="button"
              onClick={() => handleCardClick(tournament.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(tournament.id);
                }
              }}
            >
              <div className="tournament-img-frame">
                <img
                  src={tournament.img}
                  alt={tournament.title}
                  className="tournament-img"
                />
              </div>
              <div className="tournament-info">
                <div className="tournament-title">{tournament.title}</div>
                <div className="tournament-place">
                  {tournament.city && <span>{tournament.city}</span>}
                  {tournament.date && (
                    <>
                      {" – "}
                      <span className="tournament-date">{tournament.date}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
