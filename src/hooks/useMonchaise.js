import axios from "axios";
import React from "react";

const useMonchaise = () => {
  const instance = axios.create({
    baseURL: "https://assignment-12-wine.vercel.app",
  });
  return instance;
};

export default useMonchaise;
