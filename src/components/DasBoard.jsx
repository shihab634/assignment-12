import React from 'react';
import {  BrowserRouter, Outlet } from 'react-router';
// import Sidebar from './Sidebar';
import Profile from './dashboard/Profile';

const DasBoard = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
       {/* <Sidebar></Sidebar> */}
        <div className="flex-1 p-4 bg-white">
          <Outlet></Outlet>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DasBoard;