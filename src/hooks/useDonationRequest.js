import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useDonationRequest = () => {
  const [data,setData] = useState(null)
  const {user} = use(AuthContext)
  useEffect(()=>{
    axios.get(`http://localhost:3000/donation-request?email=${user?.email}`)
    .then(res=>{
      console.log(res.data);
      setData(res.data)
      
    })
  },[user?.email])
  return {data,setData}
};

export default useDonationRequest;