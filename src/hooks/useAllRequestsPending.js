import React, { useEffect, useState } from "react";
import useMonchaise from "./useMonchaise";

const useAllRequestsPending = () => {
  const monchaise = useMonchaise();
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    monchaise.get("/all-requests-pending").then((res) => {
      setRequests(res.data);
    });
  }, []);
  return { requests };
};

export default useAllRequestsPending;
