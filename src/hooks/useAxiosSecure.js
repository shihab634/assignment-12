import React, {  use } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';

const useAxiosSecure = () => {
  const {user,} = use(AuthContext)

//  if(!user){
//    document.body.innerHTML = "<p>loading</p>"
//  }
  // console.log(user);
  
  // const {user} = useContext(AuthContext)
  // const { user } = use(AuthContext)
  // console.log(user.accessToken);
  
  const instance = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
      Authorization:`Bearer ${user?.accessToken}`
    }
  })
  return instance
};

export default useAxiosSecure;