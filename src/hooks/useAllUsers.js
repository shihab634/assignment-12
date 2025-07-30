import React, { useEffect, useState } from 'react';
import useMonchaise from './useMonchaise';

const useAllUsers = () => {
  const [data,setData] = useState(null)
  const [count,setCount] = useState(null)

  const monchaise = useMonchaise()
  useEffect(()=>{
   monchaise.get('/all-users').then(res=>{
      setData(res.data)
    })
  },[count])
  return (
    {data,setCount}
  );
};

export default useAllUsers;