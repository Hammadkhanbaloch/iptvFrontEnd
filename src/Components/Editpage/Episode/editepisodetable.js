import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css'; 

const EditEpisode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState({
    name: '',
    description: '',
    status: 'Active',
    url: '', 
  });

  const handleChange = (e) => {
    setEpisode({
      ...episode,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4444/episode/${id}`, episode)
      .then((response) => {
        console.log('Episode updated:', response.data);
        navigate('/episode');
      })
      .catch((error) => {
        console.log('Error updating episode:', error);
        alert('Failed to update episode. Please try again.');
      });
  };

  return (
    <div className="edit-episode-container"> 
      <form className="edit-episode-form" onSubmit={handleSubmit}>
        <h2>Edit episode</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={episode.name}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={episode.description}
          onChange={handleChange}
        />

        <label>Status</label>
        <select
          name="status"
          value={episode.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label>Episode Image</label>
        <input
          type="file"
          name="episodeImage"
          accept="image/*"
          onChange={handleChange}
        />
        <p>
          * Max image size supported is 2 MB, supported resolution ranges from 800x800 to 2500x2500
        </p>

        <label>URL</label>
        <input
          type="text"
          name="url"
          value={episode.url}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEpisode;
