import React from "react";
// import useRole from '../hooks/useRole';
import { Navigate } from "react-router";
import AdminDashboard from "./AdminDashboard";
import useRoleByEmail from "../hooks/useRoleByEmail";
import DonorDashboard from "../components/DonorDashboard";
import ModeratorDashboard from "./Moderator/ModeratorDashboard";

const Dashboard = () => {
  const { role, loading } = useRoleByEmail();
  // console.log(loading);
  // console.log(role);
  // if (!role) {
  //   return (
  //     <div className="flex justify-center text-4xl">
  //       <span className="loading loading-spinner w-14 text-primary"></span>
  //       <span className="loading loading-spinner w-14 text-secondary"></span>
  //       <span className="loading loading-spinner w-14 text-accent"></span>
  //       <span className="loading loading-spinner w-14 text-neutral"></span>
  //       <span className="loading loading-spinner w-14 text-info"></span>
  //       <span className="loading loading-spinner w-14 text-success"></span>
  //       <span className="loading loading-spinner w-14 text-warning"></span>
  //       <span className="loading loading-spinner w-14 text-error"></span>
  //     </div>
  //   );
  // }

  if (loading) {
    return (
      <div className="flex justify-center text-4xl">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (role == "donor") {
    return (
      <div className="">
        <DonorDashboard></DonorDashboard>
      </div>
    );
  }
  if (role == "admin") {
    return <AdminDashboard></AdminDashboard>;
  }
  if (role == "volunteer") {
    return <ModeratorDashboard></ModeratorDashboard>;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default Dashboard;
