import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css'; 

const ViewEpisode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState({
    name: '',
    description: '',
    status: '',
    url: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4444/episode/${id}`)
      .then((response) => {
        setEpisode(response.data);
      })
      .catch((error) => {
        console.log('Error fetching episode:', error);
        alert('Failed to fetch episode details. Please try again.');
      });
  }, [id]);

  return (
    <div className="edit-episode-container"> {/* Reuse the same styles */}
      <div className="edit-episode-form">
        <h2>View Episode</h2>

        <label>Name</label>
        <p>{episode.name}</p>

        <label>Description</label>
        <p>{episode.description}</p>

        <label>Status</label>
        <p>{episode.status}</p>

        <label>Episode Image</label>
        {episode.episodeImage ? (
          <img src={episode.episodeImage} alt="Episode" width="100%" />
        ) : (
          <p>No Image Available</p>
        )}

        <p>
          * Max image size supported is 2 MB, supported resolution ranges from 800x800 to 2500x2500
        </p>

        <label>URL</label>
        <p>{episode.url}</p>

        <button onClick={() => navigate('/episode')}>Back to Episodes</button>
      </div>
    </div>
  );
};

export default ViewEpisode;
