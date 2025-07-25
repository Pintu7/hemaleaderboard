import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Classifica from './Classifica.jsx'
import NuovaPagina from './Homepage.jsx';
import Leaderboard from './Leaderboard.jsx';
import Tournaments from './Tournaments.jsx';
import TournamentLeaderboard from './TournamentLeaderboard.jsx';
//import Home from './Home.jsx';
import './CSS/index.css'
import Ruleset from './Ruleset.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/classifica" element={<Classifica />} />
        <Route path="/homepage" element={<NuovaPagina />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
         <Route path="/ruleset" element={<Ruleset />} />
         <Route path="/tournaments" element={<Tournaments />} />
         <Route path="/tournamentLeaderboard" element={<TournamentLeaderboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
