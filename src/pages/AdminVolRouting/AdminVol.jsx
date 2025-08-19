import React from "react";
import { Navigate } from "react-router";
import useRoleByEmail from "../../hooks/useRoleByEmail";
import AllRequests from "../Admin/AllRequests";
import AllRequestVol from "../Moderator/AllRequestVol";

const AdminVol = () => {
  const { role, loading } = useRoleByEmail();
  // console.log(loading);
  // console.log(role);
  if (!role) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-spinner w-14 text-primary"></span>
        <span className="loading loading-spinner w-14 text-secondary"></span>
        <span className="loading loading-spinner w-14 text-accent"></span>
        <span className="loading loading-spinner w-14 text-neutral"></span>
        <span className="loading loading-spinner w-14 text-info"></span>
        <span className="loading loading-spinner w-14 text-success"></span>
        <span className="loading loading-spinner w-14 text-warning"></span>
        <span className="loading loading-spinner w-14 text-error"></span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-spinner w-14 text-primary"></span>
        <span className="loading loading-spinner w-14 text-secondary"></span>
        <span className="loading loading-spinner w-14 text-accent"></span>
        <span className="loading loading-spinner w-14 text-neutral"></span>
        <span className="loading loading-spinner w-14 text-info"></span>
        <span className="loading loading-spinner w-14 text-success"></span>
        <span className="loading loading-spinner w-14 text-warning"></span>
        <span className="loading loading-spinner w-14 text-error"></span>
      </div>
    );
  }

  if (role == "volunteer") {
    return <AllRequestVol></AllRequestVol>;
  }
  if (role == "admin") {
    return <AllRequests></AllRequests>;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default AdminVol;
