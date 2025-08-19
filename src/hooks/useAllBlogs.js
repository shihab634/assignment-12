import React, { useEffect, useState } from 'react';
import useMonchaise from './useMonchaise';

const useAllBlogs = () => {
  const [blogs,setBlogs]= useState(null)
  const monchaise = useMonchaise()
  useEffect(()=>{
    monchaise.get('post-blog').then(res=>{
      console.log(res.data);
      
      setBlogs(res.data)
    })
  },[])
  return (
    {blogs,setBlogs}
  );
};

export default useAllBlogs;
