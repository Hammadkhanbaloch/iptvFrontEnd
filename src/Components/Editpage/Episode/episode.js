import React from 'react';
import Sidebar from '../../Sidebar/sidebar.js';
import EditEpisodeForm from './editepisodetable.js';
function EditEpisode() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <EditEpisodeForm/>
      </div>
    </div>
  );
}
export default EditEpisode;