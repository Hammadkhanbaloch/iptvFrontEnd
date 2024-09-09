import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/header';
import EpisodeTable from './episodetable';
function Episode() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <div>
        <Header />
        </div>
        <EpisodeTable />
      </div>
    </div>
  );
}
export default Episode;