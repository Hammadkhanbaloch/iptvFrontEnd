import React, { useState, useEffect } from 'react';
import axiosInstance from '../../Api/axiosInstance';
import './episodetablestyle.css';
import { useNavigate } from 'react-router-dom';

const EpisodeTable = () => {
  const [data, setData] = useState([]);
  const [newepisode, setNewepisode] = useState({
    name: '',
    description: '',
    status: 'Active',
  });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get('/episode')
      .then((response) => {
        console.log("Data fetched:", response.data); 
        setData(response.data.data); 
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        alert('An error occurred while fetching data. Check the console for details.');
      });
  }, []);

  const handleChange = (e) => {
    setNewepisode({
      ...newepisode,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      axiosInstance
        .patch(`/episode/${editId}`, newepisode)
        .then((response) => {
          console.log("Episode updated:", response.data);
          const updatedData = data.map((episode) =>
            episode._id === editId ? response.data : episode
          );
          setData(updatedData);
          setEditId(null);
          setNewepisode({ name: '', description: '', status: 'Active' });
        })
        .catch((error) => {
          console.error('Error updating episode:', error);
          alert('An error occurred while updating the episode. Check the console for details.');
        });
    } else {
      axiosInstance
        .post('/episode', newepisode)
        .then((response) => {
          console.log("Episode added:", response.data);
          setData([...data, response.data]);
          setNewepisode({ name: '', description: '', status: 'Active' });
        })
        .catch((error) => {
          console.log('Error adding episode:', error);
          alert('An error occurred while adding the episode. Check the console for details.');
        });
    }
  };

  const handleEditClick = (id) => {
    navigate(`/episode/edit/${id}`);
  };

  return (
    <div className="episode-table">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newepisode.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={newepisode.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <select name="status" value={newepisode.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">{editId !== null ? 'Update' : 'Submit'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((episode) => (
              <tr key={episode._id}>
                <td>{episode.name}</td>
                <td>{episode.description}</td>
                <td>{episode.status}</td>
                <td>
                  <button className="edit" onClick={() => handleEditClick(episode._id)}>
                    Edit
                  </button>
                  <button className="view">View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No episodes available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodeTable;
