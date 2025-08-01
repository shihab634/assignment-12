import React, { useEffect, useState } from "react";
import useMonchaise from "./useMonchaise";

const useDataFetcher = (url) => {
  const monchaise = useMonchaise();
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isError: false,
    error: null,
  });

  useEffect(() => {
    monchaise
      .get(url)
      .then((res) => {
        setState({
          data: res.data,
          isLoading: false,
          isError: false,
          error: null,
        });
      })
      .catch((err) => {
        setState({
          data: null,
          isLoading: false,
          isError: true,
          error: err,
        });
      });
  }, []);

  return { ...state, setState };
};

export default useDataFetcher;
