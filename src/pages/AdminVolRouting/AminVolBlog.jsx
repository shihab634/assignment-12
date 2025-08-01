import React from 'react';
import { Navigate } from 'react-router';
import BlogManager from '../../components/publicFolder/BlogManager';
import ModeratorBlog from '../Moderator/ModeratorBlog';
import useRoleByEmail from '../../hooks/useRoleByEmail';

const AdminVolBlog = () => {
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
    return <ModeratorBlog></ModeratorBlog>
    
  }
  if (role == 'admin') {
    return <BlogManager></BlogManager>
    
  }
  return (
    <Navigate to={'/'}></Navigate>
  );
};

export default AdminVolBlog;