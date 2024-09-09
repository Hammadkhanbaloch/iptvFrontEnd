import React from 'react';
import Sidebar from '../../Sidebar/sidebar.js';
import ViewEpisode from './viewepisode.js' 
function VeiwEpisode() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <ViewEpisode/>
      </div>
    </div>
  );
}
export default VeiwEpisode;