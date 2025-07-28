import React, { use } from "react";
import { Link, NavLink } from "react-router";
import useDonationRequest from "../hooks/useDonationRequest";
import { AuthContext } from "../providers/AuthProvider";

const DonorDashboard = () => {
  const { user } = use(AuthContext);
  const { data } = useDonationRequest();
  console.log(data);
  if (!data) {
    return <p className="text-2xl text-green-500">Loading</p>;
  }
  
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-3xl text-center text-black my-4">
        Welcome Mr.{user?.displayName}
      </p>
      <div className="overflow-x-auto">
        <table className="table rounded-box border border-base-content/5 bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((request, index) => (
              <tr className="hover:bg-base-300" key={index}>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  {request?.status == "inprogress" && (
                    <div className="join join-vertical">
                      <button onClick={handleDone} className="btn  btn-success join-item">
                        Done
                      </button>
                      <button onClick={handleCancel} className="btn btn-warning join-item">
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorDashboard;
