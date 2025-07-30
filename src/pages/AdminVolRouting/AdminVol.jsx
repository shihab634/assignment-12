import React from 'react';
import { Navigate } from 'react-router';
import useRoleByEmail from '../../hooks/useRoleByEmail';
import AllRequests from '../Admin/AllRequests';
import AllRequestVol from '../Moderator/AllRequestVol';

const AdminVol = () => {
  const {role,loading} = useRoleByEmail()
  // console.log(loading);
  // console.log(role);
  if(!role){
    return <p className="text-black text-7xl">loading</p>
  }

if (loading) {
  return <p className='text-center text-5xl text-green-500'>Loading</p>
}

  if (role == 'volunteer') {
    return <AllRequestVol></AllRequestVol>
    
  }
  if (role == 'admin') {
    return <AllRequests></AllRequests>
    
  }
  return (
    <Navigate to={'/'}></Navigate>
  );
};

export default AdminVol;