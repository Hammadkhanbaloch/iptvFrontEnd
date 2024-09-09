
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Sign Up/signup.js";
import Login from "./pages/Sign Up/login.js";
import Genre from "../src/Components/Genre/genre.js";
import Episode from "./Components/Episode/episode.js";
import Series from "./Components/Series/series.js";
import Season from "./Components/Season/season.js";
import EditGenre from "./Components/Editpage/Genre/genre.js";
import EditEpisode from "./Components/Editpage/Episode/episode.js";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/genre" element={<Genre/>} />
        <Route path="/episode" element={<Episode/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/season" element={<Season/>} />
        <Route path="/genre/edit" element={<EditGenre/>} />
        <Route path="/episode/edit/:id" element={<EditEpisode/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
