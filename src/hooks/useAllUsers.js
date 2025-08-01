import React, { useEffect, useState } from 'react';
import useMonchaise from './useMonchaise';

const useAllUsers = () => {
  const [data,setData] = useState(null)
  

  const monchaise = useMonchaise()
  useEffect(()=>{
   monchaise.get('/all-users').then(res=>{
    console.log(res.data);
    
      setData(res.data)
    })
  },[])
  return (
    {data,setData}
  );
};

export default useAllUsers;