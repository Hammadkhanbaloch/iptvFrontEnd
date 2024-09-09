import React, { useState } from 'react';
import './genretable.css';
import { useNavigate} from 'react-router-dom';

const GenreTable = () => {
  const [data, setData] = useState([
    { name: 'Government', description: 'Government', status: 'Active' },
    { name: 'News', description: 'News', status: 'Active' },
    { name: 'RSS', description: 'RSS', status: 'Active' },
    { name: 'Running', description: 'Running', status: 'Active' },
    { name: 'Motorsport', description: 'Motorsport', status: 'Active' },
  ]);
  const navigate=useNavigate();
  const [newGenre, setNewGenre] = useState({
    name: '',
    description: '',
    status: 'Active',
  });

  const handleChange = (e) => {
    setNewGenre({
      ...newGenre,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, newGenre]);
    setNewGenre({ name: '', description: '', status: 'Active' });
  };
  const handleeditclick=()=>
  {
    navigate("/genre/edit")
  };

  return (
    <div className="genre-table">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newGenre.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={newGenre.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <select name="status" value={newGenre.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">Submit</button>
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
          {data.map((genre, index) => (
            <tr key={index}>
              <td>{genre.name}</td>
              <td>{genre.description}</td>
              <td>{genre.status}</td>
              <td>
                <button className="edit" onClick={handleeditclick}>Edit</button>
                <button className="view" >View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenreTable;
