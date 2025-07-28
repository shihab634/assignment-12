import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useRoleByEmail = () => {
  const { user } = use(AuthContext);
  // console.log(user?.email);
  
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [status,setStatus] = useState(null)
 useEffect(()=>{
   axios
    .get(`http://localhost:3000/get-user-role?email=${user?.email}`)
    .then((res) => {
      // console.log(res.data);
      
      setRole(res.data.role);
      setStatus(res.data.status)
      setLoading(false);
    });
 },[user?.email,status,loading])
  return { role, loading,status };
};

export default useRoleByEmail;
