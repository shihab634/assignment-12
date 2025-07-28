import React from 'react';
// import useRole from '../hooks/useRole';
import { Navigate } from 'react-router';
import AdminDashboard from './AdminDashboard';
import useRoleByEmail from '../hooks/useRoleByEmail';
import DonorDashboard from '../components/DonorDashboard';

const Dashboard = () => {
  const {role,loading} = useRoleByEmail()
  // console.log(loading);
  // console.log(role);
  if(!role){
    return <p className="text-black text-7xl">loading</p>
  }

if (loading) {
  return <p className='text-center text-5xl text-green-500'>Loading</p>
}

  if (role == 'donor') {
    return <div className=""><DonorDashboard></DonorDashboard></div>
    
  }
  if (role == 'admin') {
    return <AdminDashboard></AdminDashboard>
    
  }
  if (role == 'moderate') {
    return <div className="">moderate Dashboard</div>
    
  }
  return (
    <Navigate to={'/'}></Navigate>
  );
};

export default Dashboard;