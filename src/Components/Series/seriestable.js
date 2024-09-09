import React from 'react';
import './seriestable.css';

const seriesTable = () => {
  const data = [
    { name: 'Government', description: 'Government', status: 'Active' },
    { name: 'News', description: 'News',  status: 'Active' },
    { name: 'RSS', description: 'RSS',  status: 'Active' },
    { name: 'Running', description: 'Running', status: 'Active' },
    { name: 'Motorsport', description: 'Motorsport', status: 'Active' },
  ];

  return (
    <div className="series-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Parent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((series, index) => (
            <tr key={index}>
              <td>{series.name}</td>
              <td>{series.description}</td>
              <td>{series.status}</td>
              <td>
                <button className="edit">Edit</button>
                <button className="view">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default seriesTable;