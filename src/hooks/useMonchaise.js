import axios from 'axios';
import React from 'react';

const useMonchaise = () => {
  const instance = axios.create({
    baseURL:'http://localhost:3000'
  })
  return instance
};

export default useMonchaise;