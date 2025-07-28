import React from "react";
import { Link, NavLink } from "react-router";
import useDonationRequest from "../hooks/useDonationRequest";

const DonorDashboard = () => {
  const {data} = useDonationRequest()
  console.log(data);
  

  return (
   <div className="">
    <p className="text-7xl text-black">Home</p>
   </div>
  );
};

export default DonorDashboard;
