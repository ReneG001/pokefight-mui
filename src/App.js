import React from "react";
// import "../App.css";
import Pokelist from "./Components/Pokelist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokeDetail from "./Components/PokeDetail";
import PokeFight from "./Components/PokeFight";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokefight/:pokemon" element={<PokeFight />} />
        <Route path="/:pokemon" element={<PokeDetail />} />
        <Route path="/" element={<Pokelist />} />
      </Routes>
    </Router>
  );
}
