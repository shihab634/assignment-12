import React, { useEffect, useState } from 'react';
import useMonchaise from './useMonchaise';

const useAllUsers = () => {
  const [data,setData] = useState(null)
  const monchaise = useMonchaise()
  useEffect(()=>{
   monchaise.get('/all-users').then(res=>{
      setData(res.data)
    })
  },[data])
  return (
    {data}
  );
};

export default useAllUsers;