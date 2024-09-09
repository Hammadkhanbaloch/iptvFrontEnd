import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate(); 

  const handleSeasonClick = () => {
    navigate('/season'); 
  };
  const handleSeriesClick = () => {
    navigate('/series'); 
  };
  const handleGenreClick = () => {
    navigate('/genre'); 
  };
  const handleEpisodeClick = () => {
    navigate('/episode'); 
  };

  return (
    <div className="sidebar">
      <button onClick={handleGenreClick}>Genre</button>
      <button onClick={handleSeriesClick}>Series</button>
      <button onClick={handleSeasonClick}>Seasons</button>
      <button onClick={handleEpisodeClick}>Episodes</button>
    </div>
  );
};

export default Sidebar;