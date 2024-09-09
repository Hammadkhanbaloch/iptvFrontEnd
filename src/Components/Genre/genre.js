import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/header';
import GenreTable from './genretable';
function Genre() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <div>
        <Header />
        </div>
        <GenreTable/>
      </div>
    </div>
  );
}
export default Genre;