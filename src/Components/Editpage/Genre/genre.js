import React from 'react';
import Sidebar from '../../Sidebar/sidebar.js';
import Header from '../../Header/header.js';
import EditGenreForm from './editgenre.js';
function EditGenre() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <div>
        <Header />
        </div>
        <EditGenreForm/>
      </div>
    </div>
  );
}
export default EditGenre;