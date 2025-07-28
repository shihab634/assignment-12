import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
  const [role,setRole] = useState('')
  const [loading,setLoading] = useState(true)
  const axiosSecure = useAxiosSecure()

  useEffect(()=>{
    axiosSecure('/get-user-role').then(res=>{
      setLoading(false)
      // setRole()
      // console.log(res.data);
      setRole(res.data.role)
    })
  })
  return {role,loading}
   
};

export default useRole;