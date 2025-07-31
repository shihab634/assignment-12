import React, { useEffect, useState } from 'react';
import useMonchaise from './useMonchaise';

const useAllReqInprog = () => {
  const monchaise = useMonchaise();
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    monchaise.get("/all-requests-inprogress").then((res) => {
      setRequests(res.data);
    });
  }, []);
  return { requests };
};
  
export default useAllReqInprog;