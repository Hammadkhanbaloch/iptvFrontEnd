import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/header';
import SeriesTable from './seriestable';
function Series() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <div>
        <Header />
        </div>
        <SeriesTable />
      </div>
    </div>
  );
}
export default Series;