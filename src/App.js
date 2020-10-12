import React from 'react';
import Alignment from './Alignment';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

function App() {
  return (
    <div className="app">

      <Header />

      {/* <div className="app__body"> */}
          <LeftSideBar />

      {/* </div> */}
      <div className="app__bodyy">
          <Feed />
          <RightSideBar />

      </div>
      {/* Appbody */}
        {/* Left-Sidebar  */}
        {/* Message */}
        {/* Right-Sidebar  */}

      
    </div>
  );
}

export default App;
