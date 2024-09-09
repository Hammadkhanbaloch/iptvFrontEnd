import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file for styling
const EditGenreForm = () => {
  const [formData, setFormData] = useState({
    name: 'Government',
    description: 'Government',
    tritonId: '',
    parent: 'RSS',
    status: 'Active',
    genreWeight: '0',
    genreIcon: null,
    genreColor: '#000000',
    genreImage: null,
    url: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/genre");
    
  };

  return (
    <form className="edit-genre-form" onSubmit={handleSubmit}>
      <h2>Edit Genre</h2>
      
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Triton ID</label>
      <input
        type="text"
        name="tritonId"
        value={formData.tritonId}
        onChange={handleChange}
      />

      <label>Parent</label>
      <select name="parent" value={formData.parent} onChange={handleChange}>
        <option value="RSS">RSS</option>
        {/* Add more options here */}
      </select>

      <label>Status</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <label>Genre Weight</label>
      <input
        type="number"
        name="genreWeight"
        value={formData.genreWeight}
        onChange={handleChange}
      />

      <label>Genre Icon</label>
      <input
        type="file"
        name="genreIcon"
        accept="image/*"
        onChange={handleChange}
      />

      <label>Genre Color</label>
      <input
        type="color"
        name="genreColor"
        value={formData.genreColor}
        onChange={handleChange}
      />

      <label>Genre Image</label>
      <input
        type="file"
        name="genreImage"
        accept="image/*"
        onChange={handleChange}
      />
      <p>* Max image size supported is 2 MB, supported resolution ranges from 800x800 to 2500x2500</p>

      <label>URL</label>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditGenreForm;
