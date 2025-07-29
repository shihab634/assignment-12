import React, { useEffect, useState } from 'react';
import useMonchaise from './useMonchaise';

const useAllRequests = () => {
  const monchaise = useMonchaise()
  const [requests,setRequests]= useState(null)
 useEffect(()=>{
   monchaise.get('/admin-all-requests').then(res=>{
setRequests(res.data)
  })
 },[])
  return (
   {requests}
  );
};

export default useAllRequests;