import React, { useEffect, useState } from "react";
import useMonchaise from "./useMonchaise";

const useAllRequests = () => {
  const monchaise = useMonchaise();
  const [requests, setRequests] = useState(null);
  const [count, setCount] = useState(1);
  useEffect(() => {
    monchaise.get("/admin-all-requests").then((res) => {
      setRequests(res.data);
    });
  }, [count]);
  return { requests, setCount, setRequests };
};

export default useAllRequests;
