import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
// import { Adminpage } from '../../pages/Adminpage';
import { AdminSideBar } from '../components/AdminSideBar'
import { AdminTopBar } from '../components/AdminTopBar';

export const AdminLayout: React.FunctionComponent <{
  sidebarOpen: boolean;
setSidebarOpen: (sideOpen: boolean) => void;
}> = (props) => {
const { sidebarOpen, setSidebarOpen } = props;
    return (
    <div className='container-admin'>
        <AdminSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={"main "+(sidebarOpen? "small":"large")}>
          <AdminTopBar />
          <Outlet />
        </div>
    </div>
  )
}
