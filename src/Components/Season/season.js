import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/header';
import SeasonTable from './seasontable';
function Season() {
  return (
    <div style={{display:"flex" }}>
      <Sidebar />
      <div style={{flex:"1", padding:"0px"}}>
        <div>
        <Header />
        </div>
        <SeasonTable />
      </div>
    </div>
  );
}
export default Season;